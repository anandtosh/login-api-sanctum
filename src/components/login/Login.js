import React, {useState,useEffect} from 'react';
import { Container, Form,Card,Button } from 'react-bootstrap';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('user')) {
            history.push('/welcome');
        }
    })

    async function postLogin()
    {
        let response = await fetch("http://example-app.test/api/login",{
            method: "post",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body:JSON.stringify ({
                "email" : email,
                "password" : password,
            })
        })
        let user = await response.json();
        if(typeof user.token != "undefined"){
            localStorage.setItem('user',JSON.stringify(user));
            history.push('/welcome');
        }
        else{
            alert('user cannot be authenticated please try again');
        }
    }

    return (
        <div>
            <Container>
                    <Card className="login-card">
                        <Card.Header>
                            Login to test app
                        </Card.Header>
                        <Card.Body>
                                <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" onClick={postLogin} type="button">
                                    Submit
                                </Button>
                                </Form>
                        </Card.Body>
                    </Card>
            </Container>
        </div>
    );
}

export default Login;