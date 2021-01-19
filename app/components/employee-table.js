import elementCreator from '../services/element-creator-service.js';
import domService from '../services/dom-service.js';
import { EmployeeListing } from "./employee-listing.js";


export class EmployeeTable {

    constructor(employeeService, container, popupService) {
        this.employeeService = employeeService;
        this.popupService = popupService;

        this.employeeService.getEmployees().then(employees => this.template(employees, container, this.popupService));

        container.addEventListener('employeeRemoved', function (e) {
            domService.removeFromDom(e.detail);
        }, false);

        container.addEventListener('employeeAdded', function (e) {
            const table = document.querySelector('table');
            new EmployeeListing(e.detail, table, popupService);

        }, false);

        container.addEventListener('employeeEdited', function (e) {
            const table = document.querySelector('table');
            const oldData = document.querySelector(`tr[data-id='${e.detail.id}`);
            const parent = oldData.parentNode;

            parent.replaceChild(new EmployeeListing(e.detail, table, popupService, false), oldData)
        }, false);

    }

    template(employees, container, popupService) {

        const table = elementCreator.createElement('table', '', [['cellspacing', 0]]);

        employees.forEach(employee => {
            new EmployeeListing(employee, table, popupService)
        });

        container.append(table);
    }

}
