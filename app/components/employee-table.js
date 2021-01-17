import { EmployeeListing } from "./employee-listing.js";


export class EmployeeTable {

    constructor(employeeService, container) {
        this.employeeService = employeeService;

        this.employeeService.getEmployees().then(employees => this.template(employees, container));
    }

    template(employees, container) {
        const table = document.createElement('table');

        employees.forEach(employee => new EmployeeListing(employee, table));

        container.append(table);
    }

}
