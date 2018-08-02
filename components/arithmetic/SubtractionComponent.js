import React from 'react';
import ReactDOM from 'react-dom';

export default class SubtractionComponent extends React.Component {
    render(){
        return (<button onClick={()=>{this.props.onKeyPress()}}>-</button>)
    }
}