import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Articles from './articles';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

export default function Header() {
    return(<div>
            <Navbar className="header" variant="light">
  <Navbar.Brand href="/">Utkarsh Upendra</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/articles">Articles</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  <div>
  <BrowserRouter>
  <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
          </Switch>
          </BrowserRouter>
          </div>
          </div>
    );
}