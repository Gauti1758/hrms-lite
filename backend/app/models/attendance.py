#backend/app/models/attendance.py

from sqlalchemy import Column, Integer, Date, String, ForeignKey, UniqueConstraint
from sqlalchemy.sql import func
from sqlalchemy.types import DateTime
from sqlalchemy.orm import relationship

from app.database import Base


class Attendance(Base):

    __tablename__ = "attendances"

    id = Column(Integer, primary_key=True, index=True)

    employee_id = Column(Integer, ForeignKey("employees.id"), nullable=False)
    date = Column(Date, nullable=False)
    status = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    employee = relationship("Employee", back_populates="attendance")

    __table_args__ = (
    UniqueConstraint("employee_id", "date", name="unique_employee_attendance"),
    )