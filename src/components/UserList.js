import React, { Component } from 'react';
import axios from 'axios';

import User from './User';

export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get("http://localhost:5000/user/all").then(users => {
            this.setState({ data: users.data.reverse() });
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <div id="userList">
                <br/>
                <h2>List of users:</h2>
                <br/>
                {this.state.data.map((user) => (<User key={user._id} _id={user._id} username={user.username} />))}
            </div>
        );
    }

}