import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";
import { getAttendance } from "../services/attendanceService";

function AttendanceHistory() {

  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [attendance, setAttendance] = useState([]);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadAttendance = async (id) => {
    const res = await getAttendance(id);
    setAttendance(res.data);
  };

  const handleChange = (e) => {
    const id = e.target.value;
    setEmployeeId(id);

    if (id) {
      loadAttendance(id);
    }
  };

  return (

    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        Attendance History
      </h2>

      <select
        value={employeeId}
        onChange={handleChange}
        className="border rounded p-2 w-64"
      >

        <option value="">Select Employee</option>

        {employees.map(emp => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name}
          </option>
        ))}

      </select>

      {attendance.length > 0 && (

        <table className="w-full border mt-4">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-2">Date</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {attendance.map(a => (

              <tr key={a.id} className="border-t">

                <td className="p-2">
                  {a.date}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded text-white ${
                      a.status === "Present"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {a.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  );

}

export default AttendanceHistory;