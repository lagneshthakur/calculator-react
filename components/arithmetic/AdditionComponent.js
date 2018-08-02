import React from 'react';
import ReactDOM from 'react-dom';

export default class AdditionComponent extends React.Component {
    render(){
        return (<button className="btn btn-block btn-outline-light btn-red" onClick={()=>{this.props.onKeyPress('+')}}>+</button>)
    }
}