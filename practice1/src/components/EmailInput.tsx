import React, { useState } from 'react';
import { Flex, TextArea, Text} from '@radix-ui/themes';

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


  return (
    <Flex direction="column" gap="2" style={{maxWidth: 350}}>
        <label>Email:</label>
        <TextArea 
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter Email Address' />
    </Flex>
    
  );
};

export default EmailInput;



    
