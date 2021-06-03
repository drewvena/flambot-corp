import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import {Header, Form, Input, Label, Button, Checkbox} from "semantic-ui-react";

const Signup = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const mutationResponse = await addUser({
          variables: {
            email: formState.email, password: formState.password,
            firstName: formState.firstName, lastName: formState.lastName
          }
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      };

    function showPass() {
        var p = document.getElementById('pass');
        if(p.type === 'password') {
            p.type = 'text';
        } else {
            p.type ='password';
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return (
        <div className="container my-20">
            <Header as="h1">Sign up!</Header>
            <Form onSubmit={handleFormSubmit}>
                {/* <label htmlFor="firstName">First Name: </label>
                <input type='text' name='firstName' placeholder="Your First Name" id='firstName' onChange={handleChange}></input> */}
                <Form.Field control="input" htmlFor="firstName" type='text' name='firstName' label="First Name"placeholder="Your First Name" id='firstName' onChange={handleChange} />

                {/* <label htmlFor="lastName">Last Name: </label>
                <input type='text' name='lastName' placeholder="Your Last Name" id='lastName' onChange={handleChange}></input> */}
                <Form.Field control="input" htmlFor="lastName" type='text' name='lastName' label="Last Name" placeholder="Your Last Name" id='lastName' onChange={handleChange} />

                {/* <label htmlFor="email">Email: </label>
                <input type='email' name='email' placeholder="email@gmail.com" id='email' onChange={handleChange}></input> */}
                <Form.Field control= {Input} htmlFor="email" type='email' name='email' label="Email" placeholder="email@gmail.com" onChange={handleChange}/>
                
                {/* <label htmlFor='password'>Password: </label>
                <input type='password' name='password' id='pass' onChange={handleChange}></input> */}
                <Form.Field control= {Input} htmlFor='password' type='password' name='password' label="Password" id='pass' onChange={handleChange}/>

                {/* <label htmlFor='check' id='password'>Show password</label>
                <input type='checkbox' name='check' onClick={showPass}></input>

                <button type='submit'>Submit</button> */}
                <Form.Group widths="equal">
                    <Form.Field control={Button} primary type='submit'>Submit</Form.Field>
                    <Form.Field control = {Checkbox} htmlFor='check' label="Show password" onChange={showPass}/>
                </Form.Group>

                <h3>Or, <Link to='/login'>click here to login</Link></h3>
            </Form>
        </div>
    );
};

export default Signup;