import React, { Component } from 'react';
import axios from 'axios';

import User from './';

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
            console.log(users.data.reverse());
        }).catch(err => console.log(err));
    };


    render() {
        return (
            <div id="userList">           
                {this.state.data.reverse().map((user) => (<User key={user._id} _id={user._id} username={user.username}/>))};
        </div>
        );
    }
}