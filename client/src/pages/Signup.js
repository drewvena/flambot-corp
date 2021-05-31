import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    function showPass() {
        var p = document.getElementById('pass');
        if(p.type === 'password') {
            p.type = 'text';
        } else {
            p.type ='password';
        }
    }
    return (
        <div className="container">
            <h2>Sign up!</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input type='text' name='text' placeholder="email@gmail.com"></input>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' id='pass'></input>
                <label htmlFor='check'>Show password</label>
                <input type='checkbox' name='check' onClick={showPass}></input>
                <button type='submit'>Submit</button>
                <h3>Or, <Link to='/login'>click here to login</Link></h3>
            </form>
        </div>
    );
};

export default Login;