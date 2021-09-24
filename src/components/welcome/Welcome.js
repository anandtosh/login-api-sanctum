import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Welcome.css';

function Welcome(props) {
    const [name, setName] = useState("");

    useEffect(() => {
        if(localStorage.getItem('user')) {
            let user = JSON.parse(localStorage.getItem('user'));
            setName(user.user.name);
        }
    })

    return (
        <div>
            <Container>
                <div className="welcome-content">
                    <h2>Hi {name}, Welcome to the test site.</h2>
                </div>
            </Container>
            
        </div>
    );
}

export default Welcome;