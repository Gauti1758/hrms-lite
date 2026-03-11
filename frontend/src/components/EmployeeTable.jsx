import { deleteEmployee } from "../services/employeeService";

function EmployeeTable({employees,reload}){

  const handleDelete = async(id)=>{
    await deleteEmployee(id);
    reload();
  };

  return(

    <table className="w-full border">

      <thead className="bg-gray-200">

        <tr>
          <th className="p-2">ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>
        </tr>

      </thead>

      <tbody>

        {employees.map(emp=>(
          <tr key={emp.id} className="border-t">

            <td className="p-2">{emp.employee_id}</td>
            <td>{emp.full_name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>

            <td>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={()=>handleDelete(emp.id)}
              >
                Delete
              </button>

            </td>

          </tr>
        ))}

      </tbody>

    </table>

  );

}

export default EmployeeTable;