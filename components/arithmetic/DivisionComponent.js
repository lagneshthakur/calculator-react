import React from 'react';
import ReactDOM from 'react-dom';

export default class DivisionComponent extends React.Component {
    render(){
        return (<button onClick={()=>{this.props.onKeyPress()}}>/</button>)
    }
}