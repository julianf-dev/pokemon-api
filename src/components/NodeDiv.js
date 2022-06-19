
const NodeDiv = ({
    property: characteristic,
    nameProperty: paragraph,

}) => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.className = "pokemon-info-detail";
    span.textContent = characteristic;
    const p = document.createElement('p');
    p.textContent = paragraph;
    div.append(span, p)

    return div;
}

export  { NodeDiv };