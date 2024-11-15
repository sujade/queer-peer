import React from 'react';
import GetStartedButton from '@/Components/Landing/GetStartedButton';

const GreetingText = () => {
  return (
    <>
      <h1>Hello Text Here</h1>
      <h4>(It switches between languages as you wait.)</h4>
      <GetStartedButton />
    </>
  );
};

export default GreetingText;
