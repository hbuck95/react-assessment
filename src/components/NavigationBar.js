import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import { Link } from "react-router-dom";


export default class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div id="Navbar">
                <Navbar color="dark" light expand="md">
                    <NavbarBrand> <Link to="/" className="nlink">React Assessment</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/register" className="nlink">Register</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/login" className="nlink">Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link id="viewUsers" to="/viewUsers" className="nlink">View Users</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
