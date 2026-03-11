#backend/app/crud/attendance.py

from sqlalchemy.orm import Session
from models.attendance import Attendance
from schemas.attendance import AttendanceCreate


def mark_attendance(db: Session, attendance: AttendanceCreate):

    db_attendance = Attendance(
        employee_id=attendance.employee_id,
        date=attendance.date,
        status=attendance.status
    )

    db.add(db_attendance)
    db.commit()
    db.refresh(db_attendance)

    return db_attendance


def get_employee_attendance(db: Session, employee_id: int):

    return db.query(Attendance)\
    .filter(Attendance.employee_id == employee_id)\
    .order_by(Attendance.date.desc())\
    .all()


def get_attendance_by_employee_and_date(db, employee_id, date):

    return db.query(Attendance).filter(
        Attendance.employee_id == employee_id,
        Attendance.date == date
    ).first()