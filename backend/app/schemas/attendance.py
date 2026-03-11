#backend/app/schemas/attendance.py
from typing import Literal
from pydantic import BaseModel
from datetime import date, datetime


class AttendanceCreate(BaseModel):
    employee_id: int
    date: date
    status: Literal["Present", "Absent"]


class AttendanceResponse(BaseModel):
    model_config = {"from_attributes": True}

    id: int
    employee_id: int
    date: date
    status: Literal["Present", "Absent"]
    created_at: datetime