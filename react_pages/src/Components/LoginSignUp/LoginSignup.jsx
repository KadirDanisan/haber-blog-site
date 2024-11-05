import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

import { login, signUp } from '../BackendApi/Api';

export const LoginSignup = () => {
    const [action, setAction] = useState('Login');
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const apiSubmit = async () => {
        try {
            if (action === 'Login') {
                const response = await login({ userName, password });
                console.log('Giriş başarılı:', response);
            } else {
                const response = await signUp({ userName, email, password });
                console.log('Kayıt başarılı:', response);
            }
        } catch (error) {
            console.error(`${action} işlemi başarısız:`, error);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Sign Up" && (
                <div className='input'>
                    <img src={email_icon} alt="email" />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                )}
                <div className='input'>
                        <img src={user_icon} alt="user" />
                        <input
                            type='text'
                            placeholder='User Name'
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="password" />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            {action === "Login" && (
                <div className='forgot-password'>
                    Lost password? <span>Click Here!</span>
                </div>
            )}
            <div className='submit-container'>
                <button className="submit" onClick={apiSubmit}>
                    {action === "Login" ? "Login" : "Sign Up"}
                </button>
                <div className='toggle-action'>
                    {action === "Login" ? (
                        <span onClick={() => setAction('Sign Up')}>Sign Up</span>
                    ) : (
                        <span onClick={() => setAction('Login')}>Login</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
