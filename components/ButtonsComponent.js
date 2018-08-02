import React from 'react';
import ReactDOM from 'react-dom';

export default function ButtonsComponent(props) {
    return (<button onClick={()=>{props.onKeyPress(props.text)}}>{props.text}</button>)
}