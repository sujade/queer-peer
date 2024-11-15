import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <Row className={'d-flex justify-content-center align-items-center'}>
        <Col md='auto'>
          <Link href={'/about'} className={'fw-bold'}>
            About
          </Link>
        </Col>
        <Col md='auto'>
          <Link href={'/partners'} className={'fw-bold'}>
            Our Partners
          </Link>
        </Col>
        <Col md='auto'>
          <Link href={'/volunteering'} className={'fw-bold'}>
            Volunteering
          </Link>
        </Col>
        <Col md='auto'>
          <Link href={'/donate'} className={'fw-bold'}>
            Donate
          </Link>
        </Col>
        <Col md='auto'>
          <Link href={'/privacy-policy'} className={'fw-bold'}>
            Privacy Policy
          </Link>
        </Col>
      </Row>
      <Row className={'pt-2'}>
        <Col>
          <span
            className={
              'fw-bold d-flex justify-content-center align-items-center'
            }>
            made with&nbsp;<span className={'text-danger'}>♥</span>&nbsp;
            by&nbsp;
            <Link href={'https://github.com/sujade'}>su jade</Link>
          </span>
        </Col>
      </Row>
      ;
    </>
  );
};

export default Footer;
