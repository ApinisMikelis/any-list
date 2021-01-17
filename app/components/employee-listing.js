import { EmployeeActions } from "./employee-actions.js";
import { Employee } from "../models/employee.js";


export class EmployeeListing {

    constructor(employee, container) {
        this.employee = new Employee(employee);
        container.append(this.template());
    }

    template() {
        const tableRow = document.createElement('tr');

        for (const property in this.employee) {
            tableRow.appendChild(this.createPropertyColumn(property));  
        }

        const actions = this.createActionsColumn();

        tableRow.appendChild(actions);

        return tableRow;
    }

    createPropertyColumn(property) {
        const propCol = document.createElement('td')
        const rowContent = document.createTextNode(this.employee[property]);

        propCol.appendChild(rowContent);

        return propCol;
    }

    createActionsColumn() {
        const actionsColumn = document.createElement('td');
        const actions = new EmployeeActions(this.employee);
        
        actionsColumn.appendChild(actions.getEditButton());
        actionsColumn.appendChild(actions.getDeleteButton());

        return actionsColumn;
    }

}
