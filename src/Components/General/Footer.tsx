import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  return (
    <Row className={'d-flex justify-content-center align-items-center'}>
      <Col md='auto'>
        <Link href={'/one'}>About</Link>
      </Col>
      <Col md='auto'>
        <Link href={'/one'}>Organizations</Link>
      </Col>
      <Col md='auto'>
        <Link href={'/one'}>Hospitals</Link>
      </Col>
      <Col md='auto'>
        <Link href={'/one'}>Volunteering</Link>
      </Col>
      <Col md='auto'>
        <Link href={'/one'}>Privacy Policy</Link>
      </Col>
    </Row>
  );
};

export default Footer;
