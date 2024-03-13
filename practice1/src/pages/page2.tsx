import React from 'react';
import { Button } from '@radix-ui/themes';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/Password';


const Page2: React.FC = () => {
  const handleEmailChange = (email: string) => {
    console.log('Email changed:', email);
  };

  const handleSubmit = () => {
    return null;
  };

  const handlePasswordChange = (password: string) => {
    console.log('Password:', password);
  }

  return (
    <div>
      <h1>Page 1</h1>
      <EmailInput onEmailChange={handleEmailChange} />
      <PasswordInput onPasswordChange={handlePasswordChange} />
      <Button variant='classic' color='red' onClick={handleSubmit}>Let's go</Button>
    </div>
  );
};

export default Page2;
