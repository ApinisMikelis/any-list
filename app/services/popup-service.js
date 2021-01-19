import elementCreator from './element-creator-service.js';


export class PopupService {

    constructor(appContainer, employeeService) {
        this.employeeService = employeeService;
        this.container = appContainer;
        this.popup = undefined;
        this.popupId = undefined;

        this.openDeletePopup = (popupId) => {
            this.popupId = popupId;

            this.popup = elementCreator.createElement('div', '', [['id', popupId], ['class', 'overlay']]);
            const popupContent = elementCreator.createElement('div', '', [['class', 'popup']]);
            const closeBtn = elementCreator.createElement('a', '❌', [['class', 'close'], ['href', '#']]);

            const deleteBtn = elementCreator.createElement('span', 'Delete', [['class', 'btn delete']]);
            
            this.popup.appendChild(popupContent);
            popupContent.appendChild(closeBtn);

            popupContent.appendChild(deleteBtn);

            closeBtn.addEventListener("click", this.closePopup);
            deleteBtn.addEventListener("click", this.removeEmployee);

            this.container.appendChild(this.popup);
        }

        this.closePopup = () => {
            setTimeout(() => this.popup.remove(), 1000); 
        }

        this.removeEmployee = () => {
            this.employeeService.deleteEmployee(this.popupId).then(this.closePopup);
        }

    }

}
