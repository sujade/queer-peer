import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Page = () => {
  return (
    <Container className='my-5'>
      <Row className='mb-4'>
        <Col xs={12} className='text-center'>
          <h1 className={'display-1'}>Q u e e r  P e e  r</h1>
          <span className={'fw-bold'}>QueerPeer helps stationary patients by forwarding their requests to organizations</span>
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
