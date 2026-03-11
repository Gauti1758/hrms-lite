#backend/app/routers/attendance.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.schemas.attendance import AttendanceCreate, AttendanceResponse
from app.crud import attendance as attendance_crud
from app.models.employee import Employee

router = APIRouter(prefix="/attendance", tags=["Attendance"])


@router.post("/", response_model=AttendanceResponse)
def mark_attendance(
    attendance: AttendanceCreate,
    db: Session = Depends(get_db)
):

    # Check employee exists
    employee = db.query(Employee).filter(
        Employee.id == attendance.employee_id
    ).first()

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    # Check duplicate attendance
    existing_attendance = attendance_crud.get_attendance_by_employee_and_date(
        db,
        attendance.employee_id,
        attendance.date
    )

    if existing_attendance:
        raise HTTPException(
            status_code=409,
            detail="Attendance already marked for this date"
        )

    return attendance_crud.mark_attendance(db, attendance)


@router.get("/{employee_id}", response_model=List[AttendanceResponse])
def get_attendance(
    employee_id: int,
    db: Session = Depends(get_db)
):

    return attendance_crud.get_employee_attendance(db, employee_id)