import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GreetingText from '@/Components/Landing/GreetingText';
import ExplanationText from '@/Components/Landing/ExplanationText';

const Page = () => {
  return (
    <>
      <Container className={'d-flex align-items-center justify-content-center'}>
        <Row>
          <Col>
            <GreetingText />
          </Col>
          <Col>
            <ExplanationText />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page;
