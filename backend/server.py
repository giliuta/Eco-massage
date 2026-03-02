from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

class LeadCreate(BaseModel):
    name: str
    phone: str
    contact_method: str = "phone"
    preferred_time: Optional[str] = None
    concern: Optional[str] = None
    language: str = "ru"

class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    contact_method: str
    preferred_time: Optional[str] = None
    concern: Optional[str] = None
    language: str
    created_at: str
    status: str = "new"

@api_router.get("/")
async def root():
    return {"message": "ECOMASSAGE API"}

@api_router.post("/leads", response_model=Lead)
async def create_lead(input_data: LeadCreate):
    lead = Lead(
        name=input_data.name,
        phone=input_data.phone,
        contact_method=input_data.contact_method,
        preferred_time=input_data.preferred_time,
        concern=input_data.concern,
        language=input_data.language,
        created_at=datetime.now(timezone.utc).isoformat(),
    )
    doc = lead.model_dump()
    await db.leads.insert_one(doc)
    return lead

@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    leads = await db.leads.find({}, {"_id": 0}).to_list(1000)
    return leads

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
