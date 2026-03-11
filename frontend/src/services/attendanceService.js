import API from "../api/axios";

export const markAttendance = (data) => {
  return API.post("/attendance", data);
};

export const getAttendance = (employee_id) => {
  return API.get(`/attendance/${employee_id}`);
};