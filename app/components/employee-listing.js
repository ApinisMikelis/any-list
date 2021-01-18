import elementCreator from '../services/element-creator-service.js';
import { EmployeeActions } from "./employee-actions.js";
import { Employee } from "../models/employee.js";


export class EmployeeListing {

    constructor(employee, container, popupService) {
        this.employee = new Employee(employee);
        this.popupService = popupService;

        container.append(this.template());
    }

    template() {
        const tableRow = elementCreator.createElement('tr');

        for (const property in this.employee) {
            tableRow.appendChild(this.createPropertyColumn(property));  
        }

        const actions = this.createActionsColumn();

        tableRow.appendChild(actions);

        return tableRow;
    }

    createPropertyColumn(property) {
        return elementCreator.createElement('td', this.employee[property])
    }

    createActionsColumn() {
        const actionsColumn = elementCreator.createElement('td')
        const actions = new EmployeeActions(this.employee, this.popupService);
        
        actionsColumn.appendChild(actions.getEditButton());
        actionsColumn.appendChild(actions.getDeleteButton());

        return actionsColumn;
    }

}
