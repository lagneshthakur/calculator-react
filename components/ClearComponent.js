import React from 'react';
import ReactDOM from 'react-dom';

export default function ClearComponent(props) {
    return (<button onClick={()=>{props.onClearPress()}}>DEL</button>)
}