import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";
import { markAttendance } from "../services/attendanceService";

function AttendancePage(){

  const [employees,setEmployees] = useState([]);

  const [form,setForm] = useState({
    employee_id:"",
    date:"",
    status:"Present"
  });

  const loadEmployees = async ()=>{
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(()=>{
    loadEmployees();
  },[]);

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    await markAttendance(form);

    alert("Attendance marked");

    setForm({
      employee_id:"",
      date:"",
      status:"Present"
    });
  };

  return(

    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        Mark Attendance
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-4 gap-4"
      >

        <select
          name="employee_id"
          value={form.employee_id}
          onChange={handleChange}
          required
          className="border rounded p-2"
        >

          <option value="">Select Employee</option>

          {employees.map(emp=>(
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}

        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="border rounded p-2"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border rounded p-2"
        >

          <option value="Present">Present</option>
          <option value="Absent">Absent</option>

        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4"
        >
          Mark Attendance
        </button>

      </form>

    </div>

  );

}

export default AttendancePage;