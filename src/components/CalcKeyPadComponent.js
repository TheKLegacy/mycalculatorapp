
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/CalcKeyPadComponent.css'

class CalcKeyPadComponent extends Component {

    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick(event) {
        var calcInput = event.target.innerText;
        this.props.onClickEvent(calcInput);
    }

    render() {

        return(
            <Container className="keypad-container">
                <Row>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>AC</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>+/-</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>C</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>÷</Button></Col>
                </Row>
                <Row>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>7</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>8</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>9</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>x</Button></Col>
                </Row>
                <Row>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>4</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>5</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>6</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>-</Button></Col>
                </Row>
                <Row>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>1</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>2</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>3</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>+</Button></Col>
                </Row>
                <Row>
                    <Col lg={6} sm={6} md={6} xs={6}><Button onClick={this.handleBtnClick}>0</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>.</Button></Col>
                    <Col lg={3} sm={3} md={3} xs={3}><Button onClick={this.handleBtnClick}>=</Button></Col>
                </Row>
            </Container>
        );
    }
}

export default CalcKeyPadComponent;