import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GetStartedButton from '@/Components/Landing/GetStartedButton';
import ExplanationText from '@/Components/Landing/ExplanationText';

const Page = () => {
  return (
    <Container className='d-flex align-items-center justify-content-center my-5'>
      <Row className='d-flex flex-column align-items-center justify-content-center'>
        <Col xs={12} className='text-center mb-4'>
          <ExplanationText />
        </Col>
        <Col xs={12} className='text-center'>
          <GetStartedButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
