import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
                    <Route exact path="/" render={() => <p>Please register or login to your account.</p>} />
                    <Route path="/login" render={() => <p>Login</p>} />
                    <Route path="/register" render={() => <p>Reigster</p>} />
                    <Route path="/viewUsers" render={() => <p>View Users</p>} />
                </Router>
            </div>
        );
    }
}