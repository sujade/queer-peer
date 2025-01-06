import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Page = () => {
  return (
    <Container className='my-5'>
      <Row className='mb-4'>
        <Col xs={12} className='text-center'>
          <span>Big title!</span>
          <br />
          <span>Let me get you up to speed</span>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={6} className='text-center'>
          <span>Button for patient</span>
        </Col>
        <Col xs={6} className='text-center'>
          <span>Button for organization</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
