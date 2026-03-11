import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import { getEmployees } from "../services/employeeService";

function EmployeePage() {

  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div>

      <h2>Employee Management</h2>

      <EmployeeForm reload={loadEmployees}/>

      <EmployeeTable
        employees={employees}
        reload={loadEmployees}
      />

    </div>
  );
}

export default EmployeePage;