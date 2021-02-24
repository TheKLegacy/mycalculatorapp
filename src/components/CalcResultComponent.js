
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/CalcResultComponent.css'

class CalcResultComponent extends Component {


    render() {
        let {outputResult} = this.props;
        let {stackResult} = this.props;
        return(
            <Container className="result-window">
                <Row>
                    <Col lg={6} sm={6} md={6} xs={6}> <h3>{stackResult}</h3></Col>
                    <Col lg={6} sm={6} md={6} xs={6} className="text-right"> <h1>{outputResult}</h1></Col>
                </Row>
            </Container>
        );
    }
}

export default CalcResultComponent;