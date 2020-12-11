import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Articles from './articles';
import Default from './default'
import { HashRouter, Route, Link, Switch } from "react-router-dom";


export default function Header() {
    return(
        <HashRouter basename="/me">
            <div>
            <Navbar className="header" variant="light" fixed="top">
  <Link to="/">
  <Navbar.Brand>Utkarsh Upendra</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/articles" >Articles</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  <div>
      <Switch>
        <Route exact path="/">
            <Default />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          </Switch>
          </div>
          </div>
          </HashRouter>
    );
}