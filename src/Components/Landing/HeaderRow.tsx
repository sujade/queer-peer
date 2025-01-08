import React from 'react';
import { Col, Row } from 'react-bootstrap';

const HeaderRow: React.FC = () => {
  return (
    <Row className='mb-4'>
      <Col xs={12} className='text-center'>
        <h1 className={'display-1'}>Q u e e r P e e r</h1>
        <span className={'fw-bold'}>
          QueerPeer helps stationary patients by forwarding their requests to
          organizations.
        </span>
      </Col>
    </Row>
  );
};

export default HeaderRow;
