import elementCreator from '../services/element-creator-service.js';


export class EmployeeActions {

    constructor(employee, popupService) {
        this.employee = employee;
        this.popupService = popupService;;
    }

    getDeleteButton() {
        return this.createButton('🗑️', this.popupService.openDeletePopup, this.employee.id);
    }

    getEditButton() {
        return this.createButton('✏️', this.popupService.openEditPopup, this.employee);
    }

    createButton(text, eventHandler, params) {
        const btn = elementCreator.createElement('a', text, [['class', 'btn'], ['href', `#${this.employee.id}`]]);
        btn.addEventListener("click", () => eventHandler(params));

        return btn;
    }

}
