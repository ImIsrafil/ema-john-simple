import React from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri);
            });
    }
    return (
        <div className='login'>
            <div>
                <h2>Login</h2>
                <form action="">
                    <input type="email" name="" id="email" placeholder='Email' />
                    <br />
                    <input type="password" name="" id="password" placeholder='Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John? <Link to="/register">Create Account</Link></p>

                <div>
                    <small>Sign In With</small>
                    <br />
                    <button
                        onClick={handleGoogleLogin}
                        className='btn btn-regular'
                    >Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login
