import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import LoginPage from '../Login/LoginPage'
import HomePage from '../HomePage/HomePage'
import MensPage from '../Mens/MensPage'
import WomensPage from '../Womens/WomensPage'
import KidsPage from '../Kids/KidsPage'
import CartPage from '../ViewCart/CartPage'

import './MenuBarPage.css'

const MenuBarPage = () => {
    return (
        <div>
            {/* https://react-bootstrap.github.io/components/navbar/ */}
            {/* https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together */}
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/HomePage">Online Shopping</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/Mens">Mens</Nav.Link>
                            <Nav.Link as={Link} to="/Womens">Womens</Nav.Link>
                            <Nav.Link as={Link} to="/Kids">Kids</Nav.Link>
                            <NavDropdown title="Jackets" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/Mens">Mens</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Womens">Womens</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Kids">Kids</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/HomePage">Home</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/CartPage">View Cart</Nav.Link>
                            <Nav.Link as={Link} to="/LoginPage">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/LoginPage"><LoginPage /></Route>
                    <Route exact path="/HomePage"><HomePage /></Route>
                    <Route exact path="/CartPage"><CartPage /></Route>
                    <Route exact path="/Mens"><MensPage /></Route>
                    <Route exact path="/Womens"><WomensPage /></Route>
                    <Route exact path="/Kids"><KidsPage /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MenuBarPage;
