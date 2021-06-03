import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";
import {Header, Form, Input, Label, Button, Checkbox} from "semantic-ui-react";

const Login = () => {
    function showPass() {
        var p = document.getElementById('pass');
        if(p.type === 'password') {
            p.type = 'text';
        } else {
            p.type ='password';
        }
    }

    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
        const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
        const token = mutationResponse.data.login.token;
        Auth.login(token);
        } catch (e) {
        console.log(e)
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: value
        });
    };

    return (
        <div className="container my-20">
            <Header as="h1">Login!</Header>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group widths="equal">
                    <Form.Field control= {Input} htmlFor="email" type='email' name='email' label="Email" placeholder="email@gmail.com" onChange={handleChange}/>
                    <Form.Field control= {Input} htmlFor='password' type='password' name='password' label="Password" id='pass' onChange={handleChange}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field control={Button} primary type='submit'>Submit</Form.Field>
                    <Form.Field control = {Checkbox} htmlFor='check' label="Show password" onChange={showPass}/>
                </Form.Group>

                <h3>Or, <Link to='/signup'>click here to sign up</Link></h3>
            </Form>
        </div>
    );
};

export default Login;