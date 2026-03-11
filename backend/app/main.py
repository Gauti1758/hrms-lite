#backend/app/main.py
from fastapi import FastAPI
from database import Base, engine
from models import employee, attendance
from routers import employee as employee_router
from routers import attendance as attendance_router

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="HRMS Lite API",
    description="Lightweight HRMS system for managing employees and attendance",
    version="1.0.0",
)
# To create tables automatically
Base.metadata.create_all(bind=engine)

app.include_router(employee_router.router)
app.include_router(attendance_router.router)

@app.get("/")
def health_check():
    return {"message": "HRMS Lite API Running"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)