import requests
import sys
import json
from datetime import datetime

class EcomassageAPITester:
    def __init__(self, base_url="https://exomassage-cyprus.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.errors = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
                
            print(f"Response Status: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                    return True, response_data
                except:
                    print("Response: (non-JSON)")
                    return True, {}
            else:
                error_msg = f"Expected {expected_status}, got {response.status_code}"
                self.errors.append(f"{name}: {error_msg}")
                print(f"❌ FAILED - {error_msg}")
                try:
                    error_response = response.json()
                    print(f"Error response: {json.dumps(error_response, indent=2)}")
                except:
                    print(f"Error response: {response.text}")
                return False, {}
                
        except requests.RequestException as e:
            error_msg = f"Request error: {str(e)}"
            self.errors.append(f"{name}: {error_msg}")
            print(f"❌ FAILED - {error_msg}")
            return False, {}
        except Exception as e:
            error_msg = f"Unexpected error: {str(e)}"
            self.errors.append(f"{name}: {error_msg}")
            print(f"❌ FAILED - {error_msg}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test("Root API Endpoint", "GET", "", 200)

    def test_create_lead_valid(self):
        """Test creating a lead with valid data"""
        valid_lead = {
            "name": "Test User",
            "phone": "+357 95 123456",
            "contact_method": "phone", 
            "preferred_time": "morning",
            "concern": "Back pain issues",
            "language": "en"
        }
        return self.run_test("Create Lead (Valid)", "POST", "leads", 200, valid_lead)

    def test_create_lead_minimal(self):
        """Test creating a lead with minimal required data"""
        minimal_lead = {
            "name": "Minimal User",
            "phone": "+357 95 654321"
        }
        return self.run_test("Create Lead (Minimal)", "POST", "leads", 200, minimal_lead)

    def test_create_lead_invalid(self):
        """Test creating a lead with invalid data"""
        invalid_lead = {
            "name": "",  # Empty name should fail validation
            "phone": "+357"
        }
        success, _ = self.run_test("Create Lead (Invalid)", "POST", "leads", 422, invalid_lead)
        # 422 is expected for validation error, but let's also try 400
        if not success:
            success, _ = self.run_test("Create Lead (Invalid) - retry", "POST", "leads", 400, invalid_lead)
        return success

    def test_get_leads(self):
        """Test getting all leads"""
        return self.run_test("Get All Leads", "GET", "leads", 200)

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting ECOMASSAGE API Tests")
        print("=" * 50)
        
        # Test root endpoint
        self.test_root_endpoint()
        
        # Test leads endpoints
        self.test_create_lead_valid()
        self.test_create_lead_minimal()  
        self.test_get_leads()
        self.test_create_lead_invalid()
        
        # Print summary
        print("\n" + "=" * 50)
        print(f"📊 Test Results Summary:")
        print(f"Tests Run: {self.tests_run}")
        print(f"Tests Passed: {self.tests_passed}")
        print(f"Tests Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        if self.errors:
            print(f"\n❌ Failed Tests:")
            for error in self.errors:
                print(f"   • {error}")
        else:
            print(f"\n✅ All tests passed!")
            
        return self.tests_passed == self.tests_run

def main():
    """Main test execution"""
    tester = EcomassageAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())