import React, { useState } from 'react';
import { Flex, TextArea, Text } from '@radix-ui/themes';

interface PasswordInputProps {
  onPasswordChange: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onPasswordChange }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword);
  };

  return (
    <Flex direction="column" gap="2" style={{maxWidth: 350}}>
        <label>Password:</label>
        <TextArea 
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password please' />
    </Flex>
  );
};

export default PasswordInput;
