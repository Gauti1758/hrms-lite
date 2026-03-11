#backend/app/crud/employee.py

from sqlalchemy.orm import Session
from models.employee import Employee
from schemas.employee import EmployeeCreate


def create_employee(db: Session, employee: EmployeeCreate):

    db_employee = Employee(
        employee_id=employee.employee_id,
        full_name=employee.full_name,
        email=employee.email,
        department=employee.department
    )

    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)

    return db_employee


def get_all_employees(db: Session):

    return db.query(Employee).all()


def get_employee_by_employee_id(db: Session, employee_id: str):

    return db.query(Employee).filter(
        Employee.employee_id == employee_id
    ).first()

def get_employee_by_email(db: Session, employee_email: str):

    return db.query(Employee).filter(
        Employee.email == employee_email
    ).first()

def update_employee(db: Session, employee_id: int, employee_data):

    employee = db.query(Employee).filter(
        Employee.id == employee_id
    ).first()

    if not employee:
        return None

    employee.full_name = employee_data.full_name
    employee.email = employee_data.email
    employee.department = employee_data.department

    db.commit()
    db.refresh(employee)

    return employee

def delete_employee(db: Session, id: int):

    employee = db.query(Employee).filter(Employee.id == id).first()

    if employee:
        db.delete(employee)
        db.commit()

    return employee