#backend/app/routers/employee.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from schemas.employee import EmployeeCreate, EmployeeResponse, EmployeeUpdate
from crud import employee as employee_crud

router = APIRouter(prefix="/employees", tags=["Employees"])


@router.post("/", response_model=EmployeeResponse)
def create_employee(
    employee: EmployeeCreate,
    db: Session = Depends(get_db)
):
    #Check duplicate Employee
    existing_employee = employee_crud.get_employee_by_employee_id(
        db, employee.employee_id
    )    
    if existing_employee:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Employee ID already exists"
        )
    
    # Check duplicate Email
    existing_email = employee_crud.get_employee_by_email(db, employee.email)
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered"
        )

    return employee_crud.create_employee(db, employee)


@router.get("/", response_model=List[EmployeeResponse])
def get_employees(db: Session = Depends(get_db)):

    return employee_crud.get_all_employees(db)


@router.delete("/{id}")
def delete_employee(id: int, db: Session = Depends(get_db)):

    employee = employee_crud.delete_employee(db, id)

    if not employee:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee not found"
        )

    return {"message": "Employee deleted successfully"}

@router.put("/{id}", response_model=EmployeeResponse)
def update_employee(
    id: int,
    employee: EmployeeUpdate,
    db: Session = Depends(get_db)
):

    updated_employee = employee_crud.update_employee(
        db,
        id,
        employee
    )

    if not updated_employee:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee not found"
        )

    return updated_employee