import React from 'react';
import ReactDOM from 'react-dom';

export default function ComputeComponent(props) {
    return (<button className="btn btn-block btn-outline-light text-dark btn-grey" onClick={()=>{props.onComputePress()}}>=</button>)
}