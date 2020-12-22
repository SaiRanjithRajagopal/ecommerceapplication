import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './MenuBarPage.css'

const MenuBarPage = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <h1 class="menubar-Heading">Online Clothing Collections</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/about"><About />
                </Route>
                <Route path="/users"><Users />
                </Route>
                <Route path="/"><Home />
                </Route>
            </Switch>
        </div>
    )
}

export default MenuBarPage;
