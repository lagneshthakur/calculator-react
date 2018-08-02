import React from 'react';
import ReactDOM from 'react-dom';
import ButtonsComponent from './ButtonsComponent'
import ComputeComponent from './ComputeComponent'
import BackspaceComponent from './BackspaceComponent'
import ClearComponent from './ClearComponent'
import MultiplicationComponent from './arithmetic/MultiplicationComponent'
import DivisionComponent from './arithmetic/DivisionComponent'
import AdditionComponent from './arithmetic/AdditionComponent'
import SubtractionComponent from './arithmetic/SubtractionComponent'
// For the Output Screen
function OutputScreen(props){
    return (<input type="text" value={props.expression} disabled="true" />);
}

export default class ResultScreenComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            expression: '0'
        }
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onBackspacePress = this.onBackspacePress.bind(this);
        this.onComputePress = this.onComputePress.bind(this);
        this.onClearPress = this.onClearPress.bind(this);
    }

    onKeyPress(newKey){
        console.log("Key Pressed");
        this.setState((prev)=>({
            expression: prev.expression + newKey
        }));
    }

    onBackspacePress(){
        console.log("Backspace Pressed");
        this.setState((prev)=>({
            expression: prev.expression.length <=1 ? '0' : prev.expression.substring(0,prev.expression.length-1)
        }));
    }
    
    onComputePress(){
        console.log("Compute Pressed");
        debugger
        let unComputedExpression = this.state.expression;
        try{
            eval(unComputedExpression);
        }
        catch(e){
            alert("Invalid Expression!");
            return;
        }
        this.setState((prev)=>({
            expression: eval(prev.expression).toString()
        }));
    }

    onClearPress(){
        console.log("Clear Pressed");
        this.setState((prev)=>({
            expression: '0'
        }));
    }
    
    render(){
        let buttons = [];
        return (
            <div>
                <OutputScreen expression={this.state.expression}/>
                <ButtonsComponent onKeyPress={this.onKeyPress} text="1" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="2" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="3" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="4" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="5" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="6" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="7" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="8" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="9" />
                <ButtonsComponent onKeyPress={this.onKeyPress} text="0" />
                <MultiplicationComponent onKeyPress={this.onKeyPress} />
                <DivisionComponent onKeyPress={this.onKeyPress} />
                <AdditionComponent onKeyPress={this.onKeyPress} />
                <SubtractionComponent onKeyPress={this.onKeyPress} />
                <BackspaceComponent onBackspacePress={this.onBackspacePress} />
                <ComputeComponent onComputePress={this.onComputePress} />
                <ClearComponent onClearPress={this.onClearPress} />
            </div>
        );
    } 
}