import React, {useState,useEffect} from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,NavLink,useHistory} from "react-router-dom";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Welcome from "../../components/welcome/Welcome";


function Navigation(props) {
    const history = useHistory();
    console.log(history);
    function logout(){
        localStorage.removeItem('user');
        history.push('/login');
        window.location.reload();
    }

    return (<Router>
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">Test Site</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                    <Nav.Link href="#" onClick={(e) => logout()} className="nav-link ml-auto">Logout</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Container>
                    <div>
                        <h2>Hello This is the homepage.</h2>
                    </div>
                    </Container>
                </Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/welcome" component={Welcome}></Route>
            </Switch>
        </div>
    </Router>);
}

export default Navigation;