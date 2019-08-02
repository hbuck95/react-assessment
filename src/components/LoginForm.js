import React, { Component } from 'react';
import axios from 'axios';

import {
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css'

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            loginStatus: null
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:5000/user/name/${e.target[0].value}/${e.target[1].value}`)
            .then(response => {
                if (response.data.Status === "Logged In") {
                    document.getElementById("loginForm").reset();
                    this.setState({ loginStatus: "Login successful!" });
                } else {
                    this.setState({ loginStatus: "Incorrect username/password combination." });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div id="register">
                <Container>
                    <br />
                    <form id="loginForm" onSubmit={this.handleSubmit}>
                        <Row>
                            <Col />
                            <Col />
                            <Col />
                            <Col className="formHead" xs="auto"><h2>Please enter your account details:</h2></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col />
                            <Col><h5 className="formField">Username:</h5></Col>
                            <Col><input id="usernameInput" size="25" type="text" placeholder="bobgog123"></input></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col />
                            <Col><h5 className="formField">Password:</h5></Col>
                            <Col><input id="passwordInputA" size="25" type="password" placeholder="Must not be empty"></input></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <br />
                        <Row>
                            <Col />
                            <Col />
                            <Col><Button id="userSubmit" color={this.state.loginStatus === null ? "primary" : this.state.loginStatus === "Login successful!" ? "success" : "danger" }>Login</Button></Col>
                            <Col />
                            <Col />
                        </Row>
                        <br />
                        <Row>
                            <Col />
                            <Col />
                            <Col />
                            <Col className="errorField"><h5>{this.state.loginStatus === null ? "" : this.state.loginStatus}</h5></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                    </form>
                </Container>
            </div>
        );
    }
}