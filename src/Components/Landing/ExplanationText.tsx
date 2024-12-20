import React from 'react';
import { Row } from 'react-bootstrap';

const ExplanationText = () => {
  return (
    <Row>
      <h1 className={'explanation-header lh-1'}>What is QueerPeer?</h1>
      <span>
        Text about QueerPeer, what it does, how it works and that it is
        non-profit.
      </span>
    </Row>
  );
};

export default ExplanationText;
