import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Page = () => {
    return (
        <>
            <Container className={'d-flex align-items-center justify-content-center'}>
                <Row>
                    <Col>
                        <h1>Hello Text Here</h1>
                    <h4>(It switches between languages as you wait.)</h4>
                    <h3>Get Started! (the button)</h3></Col>

                    <Col>
                        <h1>What is QueerPeer?</h1>
                        <h4>Text about QueerPeer, what it does, how it works and that it is non-profit.</h4>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Page;