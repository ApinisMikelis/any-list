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

    async deleteEmployee(id) {
        return await this.httpClient.delete(`http://localhost:8000/api/v1/employees/${id}`);
    }

}
