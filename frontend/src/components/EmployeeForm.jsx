import { useState } from "react";
import { createEmployee } from "../services/employeeService";

function EmployeeForm({reload}) {

  const [form,setForm] = useState({
    employee_id:"",
    full_name:"",
    email:"",
    department:""
  });

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    await createEmployee(form);

    reload();

    setForm({
      employee_id:"",
      full_name:"",
      email:"",
      department:""
    });
  };

  return(

    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 mb-6"
    >

      <input
        className="border p-2 rounded"
        name="employee_id"
        placeholder="Employee ID"
        value={form.employee_id}
        onChange={handleChange}
      />

      <input
        className="border p-2 rounded"
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={handleChange}
      />

      <input
        className="border p-2 rounded"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        className="border p-2 rounded"
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />

      <button
        className="bg-blue-500 text-white p-2 rounded col-span-2"
      >
        Add Employee
      </button>

    </form>

  );

}

export default EmployeeForm;