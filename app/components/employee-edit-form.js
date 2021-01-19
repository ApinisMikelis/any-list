import elementCreator from '../services/element-creator-service.js';


export class EmployeeEditForm {

    constructor(employee, employeeService, container, callback) {
        this.container = container;
        this.employee = employee;
        this.employeeService = employeeService;
        this.template(container);
        this.callback = callback;
    }

    template(container) {

        const form = elementCreator.createElement('form');

        const fnameInput = elementCreator.createElement('input', '', [
            ['type', 'text'],
            ['name', 'fname'],
            ['placeholder', 'First name']
        ]);

        const lnameInput = elementCreator.createElement('input', '', [
            ['type', 'text'],
            ['name', 'lname'],
            ['placeholder', 'Last name']
        ]);

        const emailInput = elementCreator.createElement('input', '', [
            ['type', 'email'],
            ['name', 'email'],
            ['placeholder', 'Email']
        ]);

        const titleInput = elementCreator.createElement('input', '', [
            ['type', 'text'],
            ['name', 'title'],
            ['placeholder', 'Title']
        ]);

        fnameInput.value = this.employee.fname;
        lnameInput.value = this.employee.lname;
        emailInput.value = this.employee.email;
        titleInput.value = this.employee.title;

        const submitBtn = elementCreator.createElement('a', 'Edit', [['class', 'btn submit']]);

        const callback = () => {
            const editedEmployee = {
                id: this.employee.id,
                fname:  document.querySelector(`.popup input[name='fname']`).value,
                lname: document.querySelector(`.popup input[name='lname']`).value,
                email: document.querySelector(`.popup input[name='email']`).value,
                title: document.querySelector(`.popup input[name='title']`).value
            };
            
            this.employeeService.editEmployee(editedEmployee).then(() => {
                const event = new CustomEvent('employeeEdited', { detail: editedEmployee });
                const appContainer = document.getElementById('appContainer');

                appContainer.dispatchEvent(event);
                this.callback();
            });
        }

        submitBtn.addEventListener('click', callback, false);

        form.append(fnameInput);
        form.append(lnameInput);
        form.append(emailInput);
        form.append(titleInput);
        form.append(submitBtn);

        container.append(form);
    }

}
