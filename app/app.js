import { EmployeeService } from './services/employee-service.js';
import { EmployeeTable } from './components/employee-table.js';
import { HttpService } from './services/http-service.js';

const httpService = new HttpService();
const employeeService = new EmployeeService(httpService);

const appContainer = document.getElementById('appContainer');

appContainer.append(
    new EmployeeTable(employeeService, appContainer)
);
