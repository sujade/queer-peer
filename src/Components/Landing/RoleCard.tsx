import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface RoleCardProps {
  title: string;
  text: string;
  buttonText: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, text, buttonText }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body className='p-5 d-flex flex-column justify-content-center align-items-center'>
        <Card.Title className='text-center fs-2'>{title}</Card.Title>
        <Card.Text className='text-center'>{text}</Card.Text>
        <Button variant='primary'>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default RoleCard;
