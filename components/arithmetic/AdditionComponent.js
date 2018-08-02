import React from 'react';
import ReactDOM from 'react-dom';

export default class AdditionComponent extends React.Component {
    render(){
        return (<button onClick={()=>{this.props.onKeyPress('+')}}>+</button>)
    }
}