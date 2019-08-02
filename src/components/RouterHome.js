import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from './NavigationBar';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import UserList from './UserList';

export default class RouterHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUser: undefined
        };
    }

    render() {
        return (
            <div>
                <Router>
                    <NavigationBar/>
                    <Route exact path="/" render={() => <div><br/><p>Please register or login to your account.</p></div>} />
                    <Route path="/login" render={() => <LoginForm/>} />
                    <Route path="/register" render={() => <RegisterForm/>} />
                    <Route path="/viewUsers" render={() => <UserList/>} />
                </Router>
            </div>
        );
    }
}