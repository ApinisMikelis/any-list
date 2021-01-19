export class EmployeeService {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    
    async getEmployees() {
        return await this.httpClient.get('http://localhost:8000/api/v1/employees/');
    }

    async getEmployeeById(id) {
        return await this.httpClient.get(`http://localhost:8000/api/v1/employees/${id}`);
    }

    async addEmployee(employee) {
        return await this.httpClient.post(`http://localhost:8000/api/v1/employees/`, employee);
    }

    async editEmployee(employee) {
        return await this.httpClient.put(`http://localhost:8000/api/v1/employees/${employee.id}`, employee);
    }

    async deleteEmployee(id) {
        return await this.httpClient.delete(`http://localhost:8000/api/v1/employees/${id}`);
    }

}
