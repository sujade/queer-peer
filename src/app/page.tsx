'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderRow from '@/Components/Landing/HeaderRow';
import ButtonRow from '@/Components/Landing/ButtonRow';

const Page = () => {
  return (
    <Container className='my-5'>
      <HeaderRow />
      <ButtonRow />
    </Container>
  );
};

export default Page;
