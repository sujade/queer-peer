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
    <Card className={'border-0'} style={{ width: '18rem' }}>
      <Card.Body className='border border-black rounded-5 p-5 d-flex flex-column justify-content-center align-items-center'>
        <Card.Title className='px-5 text-center fs-2'>{title}</Card.Title>
        <Card.Text className='text-center'>{text}</Card.Text>
        <Button variant='primary'>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default RoleCard;
