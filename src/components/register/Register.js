import React, {useState,useEffect} from 'react';
import { Container, Form,Card,Button } from 'react-bootstrap';
import './Register.css';
import { useHistory } from 'react-router-dom';

function Register(props) {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [confirm_password,setConfirmPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('user')) {
            history.push('/welcome');
        }
    })

    async function postRegister()
    {
        let response = await fetch("http://example-app.test/api/register",{
            method: "post",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body:JSON.stringify ({
                "email" : email,
                "password" : password,
                "confirm_password" : confirm_password,
                "name" : name,
            })
        })
        let user = await response.json();
        localStorage.setItem('user',JSON.stringify(user));
        history.push('/welcome');
    }

    return (
        <div>
            <Container>
                    <Card className="login-card">
                        <Card.Header>
                            Register Here
                        </Card.Header>
                        <Card.Body>
                                <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                                </Form.Group>
                                <Button variant="primary" onClick={postRegister} type="button">
                                    Submit
                                </Button>
                                </Form>
                        </Card.Body>
                    </Card>
            </Container>
        </div>
    );
}

export default Register;