from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import os
import uuid
from datetime import datetime, timezone

app = FastAPI()

# MongoDB - use MONGO_URL env var (set in Vercel dashboard, e.g. MongoDB Atlas)
mongo_url = os.environ.get('MONGO_URL', '')
db_name = os.environ.get('DB_NAME', 'ecomassage')

client = None
db = None

def get_db():
    global client, db
    if client is None and mongo_url:
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
    return db

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class LeadCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    phone: str = Field(..., min_length=6, max_length=30)
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

@app.get("/api")
async def root():
    return {"message": "ECOMASSAGE API"}

@app.post("/api/leads", response_model=Lead)
async def create_lead(input_data: LeadCreate):
    database = get_db()
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
    if database:
        await database.leads.insert_one(doc)
    return lead

@app.get("/api/leads", response_model=List[Lead])
async def get_leads():
    database = get_db()
    if not database:
        return []
    leads = await database.leads.find({}, {"_id": 0}).to_list(1000)
    return leads
