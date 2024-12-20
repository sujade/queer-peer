import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GreetingText from '@/Components/Landing/GreetingText';
import GetStartedButton from '@/Components/Landing/GetStartedButton';

const Page = () => {
  return (
    <Container className='d-flex align-items-center justify-content-center my-5'>
      <Row className='d-flex flex-column align-items-center justify-content-center'>
        <Col xs={12}>
          <GreetingText />
        </Col>
        <Col xs={12} className='text-center'>
          <GetStartedButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
