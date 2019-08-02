import React, { Component } from 'react';
import axios from 'axios';

import {
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css'

export default class Registerform extends Component {
    constructor() {
        super();
        this.state = {
            errors: null,
            registerStatus: null
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const userDetails = {
            username: e.target[0].value,
            password: e.target[1].value,
            password2: e.target[2].value,
            email: e.target[3].value
        };

        const headers = {
            'Content-Type': 'application/json'
        };

        console.log("Body: " + JSON.stringify(userDetails));
        axios.post("http://localhost:5000/user/createUser", userDetails, {
            headers: headers
        })
            .then(response => {
                console.log(response.data);
                let data = response.data;
                if (data._id === undefined) {
                    window.alert("There were errors when creating your account.");
                    this.setState({ errors: data, registerStatus: false });
                } else {
                    window.alert("Account created successfully!");
                    document.getElementById("registerForm").reset();
                    this.setState({ errors: null, registerStatus: true });
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ success: false });
            });
    }

    render() {
        return (
            <div id="register">
                <Container>
                    <br />
                    <form id="registerForm" onSubmit={this.handleSubmit}>
                        <Row>
                            <Col />
                            <Col />
                            <Col />
                            <Col className="formHead" xs="auto"><h2>Please enter your details:</h2></Col>
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
                        <Row>
                            <Col />
                            <Col />
                            <Col><h5 className="formField">Repeat Password:</h5></Col>
                            <Col><input id="passwordInputB" size="25" type="password" placeholder="Must match the password above"></input></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col />
                            <Col><h5 className="formField">Email Address:</h5></Col>
                            <Col><input id="emailInput" size="25" type="email" placeholder="bob@gog.com"></input></Col>
                            <Col />
                            <Col />
                            <Col />
                        </Row>
                        <br />
                        <Row>
                            <Col />
                            <Col />
                            <Col><Button id="userSubmit" color={this.state.registerStatus === null ? "primary" : this.state.registerStatus ? "success" : "danger" }>Create Account</Button></Col>
                            <Col />
                            <Col />
                        </Row>
                        <br />
                        <Row>
                            <Col />
                            <Col />
                            <Col />
                            <Col className="errorField"><h5>{this.state.errors === null ? "" : JSON.stringify(this.state.errors)}</h5></Col>
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