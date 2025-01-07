import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface RoleCardProps {
  title: string;
  text: string;
  imgSrc: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, text, imgSrc }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant='primary'>Let's Start</Button>
      </Card.Body>
    </Card>
  );
};

export default RoleCard;
