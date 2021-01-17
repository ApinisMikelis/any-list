export class EmployeeActions {

    constructor(employee) {
        this.employee = employee;
    }

    getDeleteButton() {
        return this.createButton('❌', this.delete);
    }

    getEditButton() {
        return this.createButton('✏️', this.edit);
    }

    createButton(text, eventHandler) {
        const button = document.createElement('a');
        const buttonText = document.createTextNode(text);
        button.appendChild(buttonText);
        button.addEventListener("click", () => eventHandler(this.employee));

        const attr = document.createAttribute('class');
        attr.value = 'btn';
        button.setAttributeNode(attr)

        return button;
    }

    edit(employee) {
        console.log(`Edit: ${employee.id}`);
    }

    delete(employee) {
        console.log(`Delete: ${employee.id}`);
    }

}
