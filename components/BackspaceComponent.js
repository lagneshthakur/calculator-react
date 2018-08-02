import React from 'react';
import ReactDOM from 'react-dom';

export default function BackspaceComponent(props) {
    return (<button className="btn btn-block btn-outline-light text-dark btn-grey" onClick={()=>{props.onBackspacePress()}}>DEL</button>)
}