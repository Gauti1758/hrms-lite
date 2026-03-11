#backend/app/schemas/employee.py
from pydantic import BaseModel, EmailStr
from datetime import datetime


class EmployeeCreate(BaseModel):
    employee_id: str
    full_name: str
    email: EmailStr
    department: str

    model_config = {
        "json_schema_extra": {
            "example": {
                "employee_id": "EMP001",
                "full_name": "Gautam Kumar Singh",
                "email": "gautam@company.com",
                "department": "Engineering"
            }
        }
    }


class EmployeeResponse(BaseModel):
    model_config = {"from_attributes": True}

    id: int
    employee_id: str
    full_name: str
    email: EmailStr
    department: str
    created_at: datetime

class EmployeeUpdate(BaseModel):
    full_name: str
    email: EmailStr
    department: str

    model_config = {
        "json_schema_extra": {
            "example": {
                "full_name": "Gautam Kumar Singh",
                "email": "gautam.updated@company.com",
                "department": "Product"
            }
        }
    }