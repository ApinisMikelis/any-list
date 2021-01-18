function fillAttributes (element, attributes) {
    attributes.forEach((attr, index) => {
        const attribute = document.createAttribute(attr[0]);
        attribute.value =  attr[1];
        element.setAttributeNode(attribute);
    });
}

export default {

  createElement(tag, innerText = '', attributes = []) {

        const element = document.createElement(tag);
        const textNode = document.createTextNode(innerText);
        element.appendChild(textNode)

        if (!!attributes) {
            fillAttributes(element, attributes);
        }

        return element;

    }
}