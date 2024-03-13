import React, { useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Flex, TextArea, Text, Button } from '@radix-ui/themes';

interface EmailInputProps {
  onEmailChange: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onEmailChange }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    onEmailChange(newEmail);
  };

  const handleSubmit = () => {
    return null
  };

  return (
    <Flex direction="column" gap="2" style={{maxWidth: 350}}>
        <label>Email:</label>
        <TextArea 
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter Email Address' />
        <Text>Hello from Radix Themes :)</Text>
        <Button variant='classic' color='red' onClick={handleSubmit}>Let's go</Button>
    </Flex>
    
  );
};

export default EmailInput;



    
