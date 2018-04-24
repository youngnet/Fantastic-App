import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import Login from "./pages/login";
import "./common/style/reset.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

render(
    <Router>
        <Switch>
            <Route path="/home" component={Login} />
        </Switch>
    </Router>,
    window.root
);
