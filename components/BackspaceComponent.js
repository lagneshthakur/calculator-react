import React from 'react';
import ReactDOM from 'react-dom';

export default function BackspaceComponent(props) {
    return (<button onClick={()=>{props.onBackspacePress()}}>DEL</button>)
}