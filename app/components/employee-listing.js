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

        return tableRow;
    }

    createPropertyColumn(property) {
        const propCol = document.createElement('td')
        const rowContent = document.createTextNode(this.employee[property]);
        propCol.appendChild(rowContent);

        return propCol;
    }

}
