'use client';
import React, { useState, useEffect } from 'react';

const GreetingText = () => {
  const [text, setText] = useState('Welcome to our Website');
  const [index, setIndex] = useState(0);
  const messages = [
    'Hallo!',
    'Bonjour!',
    'Hello!',
    'Hola!',
    'Ciao!',
    'Merhaba!',
    'مرحبا!'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setText(messages[index]);
  }, [index]);

  return <span className='greeting-text fade-in-out'>{text}</span>  ;
};

export default GreetingText;
