# HRMS Lite – Employee & Attendance Management System

HRMS Lite is a lightweight **Human Resource Management System** that allows organizations to manage employees and track daily attendance.

This project is built using a **modern full-stack architecture**:

* **Backend:** FastAPI + PostgreSQL
* **Frontend:** React (Vite) + TailwindCSS
* **ORM:** SQLAlchemy
* **Deployment Ready:** Render + Vercel

---

# Features

### Employee Management

* Add new employees
* View employee list
* Delete employees
* Update employee details

### Attendance Tracking

* Mark employee attendance (Present / Absent)
* Select employee and date

### Attendance History

* View attendance records for a specific employee
* Status shown with colored indicators

---

# Project Architecture

```
HRMS_Lite_Ethara-AI
│
├── backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── routers
│   │   ├── employee.py
│   │   └── attendance.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# Tech Stack

## Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* Uvicorn

## Frontend

* React
* Vite
* TailwindCSS
* Axios

---

# Backend Setup

### 1. Navigate to backend

```
cd backend
```

### 2. Create Virtual Environment

```
python -m venv venv
```

Activate:

Linux / Mac

```
source venv/bin/activate
```

Windows

```
venv\Scripts\activate
```

### 3. Install Dependencies

```
pip install -r requirements.txt
```

### 4. Configure Database

Create PostgreSQL database and update the connection string in:

```
database.py
```

Example:

```
DATABASE_URL = "postgresql://username:password@localhost:5432/hrms_db"
```

### 5. Run Backend Server

```
uvicorn main:app --reload
```

Backend will run on:

```
http://localhost:8000
```

API Documentation:

```
http://localhost:8000/docs
```

---

# Frontend Setup

### 1. Navigate to frontend

```
cd frontend
```

### 2. Install Dependencies

```
npm install
```

### 3. Start Development Server

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# API Endpoints

### Employees

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| POST   | /employees      | Create employee |
| GET    | /employees      | List employees  |
| DELETE | /employees/{id} | Delete employee |
| PUT    | /employees/{id} | Update employee |

### Attendance

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| POST   | /attendance               | Mark attendance        |
| GET    | /attendance/{employee_id} | Get attendance history |

---

# Screenshots

Employee Dashboard
Attendance Marking
Attendance History

*(You can add screenshots here later)*

---

# Future Improvements

* Employee authentication
* Role-based access (Admin / HR)
* Attendance analytics dashboard
* Monthly attendance reports
* Export reports (PDF / Excel)

---

# Author

Gautam Kumar Singh

Full Stack Developer
Backend: Python / FastAPI
Frontend: React

---

# License

This project is for educational and demonstration purposes.
