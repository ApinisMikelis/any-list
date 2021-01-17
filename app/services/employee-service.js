export class EmployeeService {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    
    getEmployees() {
        return this.httpClient.get('http://localhost:8000/api/v1/employees/');
    }

    getEmployeeById(id) {
        return this.httpClient.get(`http://localhost:8000/api/v1/employees/${id}`);
    }

}
