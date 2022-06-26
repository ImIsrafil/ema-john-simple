import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register'>
            <div>
                <h2>Create an Account</h2>
                <form action="">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                    <br />
                    <input type="password" name="password" id="password" placeholder='Passeword' />
                    <br />
                    <input type="password" name="re-password" id="re-password" placeholder='Re-Enter Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an Account? <Link to="/login">Login</Link></p>
                <div>...........................</div>
                <button className='btn btn-regular'>Sign In with Google</button>
            </div>
        </div>
    )
}

export default Register
