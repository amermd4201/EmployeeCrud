import axios from "axios";

const EmployeBaseUrl = "http://localhost:3000/Employees";

class EmployeeService {
    getEmployees(){
        return axios.get(EmployeBaseUrl);
    }

    createEmployee(employee) {
        return axios.post(EmployeBaseUrl,employee);
    }
    getEmployeeById(employeeId) {
        return axios.get(EmployeBaseUrl+'/'+employeeId);
    }
    updateEmployee(employee,employeeId){
        return axios.put(EmployeBaseUrl+'/'+employeeId,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EmployeBaseUrl+'/'+employeeId);
    }
}
export default new EmployeeService()