'use client';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RoleCard from '@/Components/Landing/RoleCard';

const Page = () => {
  return (
    <Container className='my-5'>
      <Row className='mb-4'>
        <Col xs={12} className='text-center'>
          <h1 className={'display-1'}>Q u e e r P e e r</h1>
          <span className={'fw-bold'}>
            QueerPeer helps stationary patients by forwarding their requests to
            organizations
          </span>
        </Col>
      </Row>
      <Row className='mb-4 mt-5 text-center'>
        <span className={'display-5'}>How can we help you today?</span>
      </Row>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col
          xs={12}
          md={6}
          lg={4}
          className='d-flex justify-content-center mb-3'>
          <RoleCard
            title={'Organization'}
            text={
              'Do you represent an organization and want to take inquiries?'
            }
            buttonText={'Check Inquiries'}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className='d-flex justify-content-center mb-3'>
          <RoleCard
            title={'Patient'}
            text={'Are you currently a stationary patient who has an inquiry?'}
            buttonText={'Create Inquiry'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
