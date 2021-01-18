import elementCreator from '../services/element-creator-service.js';
import { EmployeeListing } from "./employee-listing.js";


export class EmployeeTable {

    constructor(employeeService, container, popupService) {
        this.employeeService = employeeService;
        this.popupService = popupService;

        this.employeeService.getEmployees().then(employees => this.template(employees, container, this.popupService));
    }

    template(employees, container, popupService) {

        const table = elementCreator.createElement('table', '', [['cellspacing', 0]]);

        employees.forEach(employee => {
            new EmployeeListing(employee, table, popupService)
        });

        container.append(table);
    }

}
