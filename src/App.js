import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CalcResultComponent from "./components/CalcResultComponent";
import CalcKeyPadComponent from "./components/CalcKeyPadComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      calculatorOutput: "",
      operationStack:[]
    };

    this.onKeyPadClick = this.onKeyPadClick.bind(this);
  }

  

  onKeyPadClick(keyPadValue) {
    if (keyPadValue === "AC") {
      this.clear();
      this.resetInput();
      return;
    } else if (keyPadValue === "C") {
      this.resetInput();
      return;
    } else if(keyPadValue === "+/-" && !isNaN(this.state.calculatorOutput)) {
       //Invert Current Input
      this.setState({
        calculatorOutput: String(this.state.calculatorOutput * -1)
      });
      return;
    }

    //Operand construction
    if(!isNaN(keyPadValue) || keyPadValue === ".") {
        this.setState({
        calculatorOutput: this.state.calculatorOutput + keyPadValue,
      });
    } else {
      //Operator
      if(keyPadValue !== "=" && this.state.calculatorOutput.length !== 0 && !isNaN(this.state.calculatorOutput)) {

        //If we're pressing operator, push the current output into stack, and operator

        var opStack = this.state.operationStack;
        opStack.push(this.state.calculatorOutput);
        opStack.push(keyPadValue);

        this.setState({
          calculatorOutput: "",
          operationStack: opStack
        })
      } else if(keyPadValue === "=" && this.state.operationStack.length > 1) {
        
        var num = null;
        var opStack = this.state.operationStack;
        opStack.push(this.state.calculatorOutput);

        for(var i = 0, op = null; i < opStack.length; i++) {
          
          if(i % 2 === 0) {
            if(isNaN(opStack[i])) {
              this.sendError();
              return;
            }
            
            if (num == null)
            {
              num = opStack[i];
            }
            else{
              num = this.calc(num, op, opStack[i]);
            }
          }
          else {
            if(!["+","-","x","÷"].includes(opStack[i])) {
              this.sendError();
              return;
            }
            
            op = opStack[i];
          }
        }
        
        this.clear();
        this.setState({
            calculatorOutput: num
          });
      }
    } 
  }

  resetInput() {
    this.setState({
      calculatorOutput: ""
    });
  }

  clear() {
    this.setState({
      operationStack: []
    });
  }

  sendError() {
    this.clear();
    this.setState({
      calculatorOutput: "Error"
    });
  }


  calc(num1, op, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(op === "-") {
      return num1 - num2;
    }
    
    if(op === "+") {
      return num1 + num2;
    }
    
    if(op === "÷") {
      return num1 / num2;
    }
    
    return num1 * num2;
  }

  render() {
    return (
      <div>
        <Jumbotron className="App-Title">
          <h1>Dom's Calculator App</h1>
        </Jumbotron>
        <Container className="App-Container">
          <CalcResultComponent outputResult={this.state.calculatorOutput} stackResult={this.state.operationStack} />
          <CalcKeyPadComponent onClickEvent={this.onKeyPadClick} />
        </Container>
      </div>
    );
  }
}

export default App;
