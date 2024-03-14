import React, { useState } from 'react';
import { Flex, TextFieldInput, Button } from '@radix-ui/themes';
import {useForm, SubmitHandler} from "react-hook-form";
import { useNavigate } from 'react-router-dom';

type Inputs = {
    email: string
    password: string
  }


const Page1: React.FC = () => {
  const navigate = useNavigate(); 
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register, handleSubmit, formState :{errors}} = useForm<Inputs>();

  console.log(errors);


  const onSubmit: SubmitHandler<Inputs> = (data) => 
    console.log(data)



  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  return (
     <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto mt-8'>
        <h1 className="font-serif">Page 1</h1>
        <Flex className="container mx-auto" style={{ maxWidth: 350 }}>
            <label>Email:</label>
            <TextFieldInput
                {...register("email", {required:"This is required."})}
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Email Address"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-400"

            />
            <p>{errors.email && <span>This email field is required</span>}</p>
            <label>Password:</label>
            <TextFieldInput
                {...register("password", {
                    required:"This is required.",
                    minLength: {
                        value: 4, 
                        message: "Min length is 4"
                     }
                })}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password here"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-400"
            />
            <p>{errors.password && <span>This password field is required</span>}</p>
            {/* <Button variant='classic' color='red' onClick={() =>navigate("/Page2")}>Go to Page 2</Button> */}
            <Button 
                variant='classic' 
                color='red' 
                onClick={() =>navigate("/Page3", {state : {email, password}}) }
                className="border border-solid border-black rounded-md p-2"
                >Go to Page 3</Button>

        </Flex>
    </form>
  );
};

export default Page1;
