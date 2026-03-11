import { useState } from "react";

import EmployeePage from "./pages/EmployeePage";
import AttendancePage from "./pages/AttendancePage";
import AttendanceHistory from "./pages/AttendanceHistory";

function App() {

  const [page,setPage] = useState("employees");

  return (

    <div className="min-h-screen bg-gray-100">

  <div className="max-w-5xl mx-auto p-6">

    <h1 className="text-3xl font-bold mb-6">
      HRMS Lite
    </h1>

        <div className="border-b mb-6 flex gap-6">

        <button
            onClick={() => setPage("employees")}
            className={`pb-2 font-medium ${
            page === "employees"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
        >
            Employees
        </button>

        <button
            onClick={() => setPage("attendance")}
            className={`pb-2 font-medium ${
            page === "attendance"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
        >
            Attendance
        </button>

        <button
            onClick={() => setPage("history")}
            className={`pb-2 font-medium ${
            page === "history"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
        >
            History
        </button>

        </div>

        <div className="bg-white p-6 rounded shadow">

          {page === "employees" && <EmployeePage />}
          {page === "attendance" && <AttendancePage />}
          {page === "history" && <AttendanceHistory />}

        </div>

      </div>

    </div>

  );

}

export default App;