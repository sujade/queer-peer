import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GreetingText from '@/Components/Landing/GreetingText';
import ExplanationText from '@/Components/Landing/ExplanationText';

const Page = () => {
  return (
    <>
      <Container
        className={
          'd-flex align-items-center justify-content-center flex-nowrap overflow-hidden my-5'
        }>
        <Row>
          <Col
            className={'d-flex align-items-center justify-content-center'}
            md={6}>
            <GreetingText />
          </Col>
          <Col
            className={'d-flex align-items-center justify-content-center'}
            md={6}>
            <ExplanationText />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page;
