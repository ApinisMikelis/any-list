import { EmployeeService } from './services/employee-service.js';
import { EmployeeTable } from './components/employee-table.js';
import { HttpService } from './services/http-service.js';
import { PopupService } from './services/popup-service.js';

const appContainer = document.getElementById('appContainer');

const httpService = new HttpService();
const employeeService = new EmployeeService(httpService);
const popupService = new PopupService(appContainer, employeeService);

appContainer.append(
    new EmployeeTable(employeeService, appContainer, popupService)
);
