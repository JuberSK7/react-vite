import React from 'react'
import ReactDOM from 'react-dom';
import Alert from "../component/alert";


const meta = {count : 0}

export function alert(message) {
    let node = document.createElement('div');
    let id = `modal-${meta.count++}`
    node.setAttribute('id', id);
    document.body.appendChild(node);
    ReactDOM.render(<Alert message={message} idForUnmount={id} />, node);
}