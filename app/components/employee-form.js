import elementCreator from '../services/element-creator-service.js';


export class EmployeeForm {

    constructor(employeeService, container) {
        this.employeeService = employeeService;

        this.template(container);

        
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

        const submitBtn = elementCreator.createElement('a', 'Add', [['class', 'btn submit']]);

        const callback = () => {
            const newEmployee = {
                fname:  document.querySelector(`input[name='fname']`).value,
                lname: document.querySelector(`input[name='lname']`).value,
                email: document.querySelector(`input[name='email']`).value,
                title: document.querySelector(`input[name='title']`).value
            };
            
            this.employeeService.addEmployee(newEmployee).then(id => {
                const employee = newEmployee;
                employee.id = id;
                debugger;
                const event = new CustomEvent('employeeAdded', { detail: employee });
                container.dispatchEvent(event);
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
