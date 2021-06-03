import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

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
            <h2>Login!</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email: </label>
                <input type='email' name='email' placeholder="email@gmail.com" onChange={handleChange}></input>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' id='pass' onChange={handleChange}></input>
                <label htmlFor='check'>Show password</label>
                <input type='checkbox' name='check' onClick={showPass}></input>
                <button type='submit'>Submit</button>
                <h3>Or, <Link to='/signup'>click here to sign up</Link></h3>
            </form>
        </div>
    );
};

export default Login;