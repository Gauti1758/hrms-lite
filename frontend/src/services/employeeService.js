import API from "../api/axios";

export const getEmployees = () => {
  return API.get("/employees");
};

export const createEmployee = (data) => {
  return API.post("/employees", data);
};

export const deleteEmployee = (id) => {
  return API.delete(`/employees/${id}`);
};

export const updateEmployee = (id, data) => {
  return API.put(`/employees/${id}`, data);
};