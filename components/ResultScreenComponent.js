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
    return (<input className="form-control outputScreen" type="text" value={props.expression} onKeyPress={props.handleKeyPress} onChange={props.handleChange} />);
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
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);        
    }

    onKeyPress(newKey){
        console.log("Key Pressed");
        this.setState((prev)=>({
            expression: prev.expression == '0' ? newKey : prev.expression + newKey
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
            expression: (Math.round(eval(prev.expression) * Math.pow(10, 10)) / Math.pow(10, 10)).toString()
        }));
    }

    onClearPress(){
        console.log("Clear Pressed");
        this.setState((prev)=>({
            expression: '0'
        }));
    }

    handleChange(e){
        if(!e.target.value.match(/[a-z]/i)){
            this.setState({ expression: e.target.value });
        }
    }

    handleKeyPress(e){
        if (e.key === 'Enter') {
            this.onComputePress();
        }
    }
    
    render(){
        let buttons = [];
        return (
            <div>
                <nav style={{marginBottom:'10px'}} class="navbar navbar-expand-sm bg-light navbar-light">
                    <a style={{fontSize:'30px', fontWeight:'300', fontFamily:'digital-7'}} class="navbar-brand" href="#">ReactJS - Calculator</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-md-4 no-x-padding">  
                            <div className="row">
                                <div className="col-md-12 no-x-padding">
                                    <OutputScreen expression={this.state.expression} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 no-x-padding">
                                    <ClearComponent onClearPress={this.onClearPress} />
                                </div>
                                <div className="col-md-6 no-x-padding">
                                    <BackspaceComponent onBackspacePress={this.onBackspacePress} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="1" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="2" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="3" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <MultiplicationComponent onKeyPress={this.onKeyPress} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="4" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="5" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="6" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <DivisionComponent onKeyPress={this.onKeyPress} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="7" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="8" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="9" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <AdditionComponent onKeyPress={this.onKeyPress} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="." />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ButtonsComponent onKeyPress={this.onKeyPress} text="0" />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <ComputeComponent onComputePress={this.onComputePress} />
                                </div>
                                <div className="col-md-3 no-x-padding">
                                    <SubtractionComponent onKeyPress={this.onKeyPress} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}