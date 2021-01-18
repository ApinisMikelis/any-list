import elementCreator from './element-creator-service.js';


export class PopupService {

    constructor(appContainer) {
        this.container = appContainer;

        this.openDeletePopup = (popupId) => {

            const popup = elementCreator.createElement('div', '', [['id', popupId], ['class', 'overlay']]);
            const popupContent = elementCreator.createElement('div', '', [['class', 'popup']]);
            const closeBtn = elementCreator.createElement('a', '❌', [['class', 'close'], ['href', '#']]);
            
            popup.appendChild(popupContent);
            popupContent.appendChild(closeBtn);

            closeBtn.addEventListener("click", () => {
                setTimeout(() => popup.remove(), 1000); 
            });

            this.container.appendChild(popup);
        }

        

    }

}
