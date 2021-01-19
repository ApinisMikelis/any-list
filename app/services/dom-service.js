export default {

  removeFromDom(employeeId) {
        const element = document.querySelector(`[data-id='${employeeId}']`);
        element.remove();
    }
}