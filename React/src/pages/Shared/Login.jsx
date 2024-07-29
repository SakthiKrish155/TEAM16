import React, { useState, useEffect } from 'react'
import '@/assets/css/Login.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as Components from './logcom';

const Login = () => {
    const adminCredentials = {
        email: 'admin@gmail.com',
        password: 'admin'
    };

    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.fromContactUs) {
            toggle(false);
        }
    }, [location.state]);

    const handleSignIn = () => {
        if (email === adminCredentials.email && password === adminCredentials.password) {
            navigate('/admin/dashboard');
        } else if (email === 'user@gmail.com' && password === 'user') {
            navigate('/');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <>
            <div className="body">
                <Components.Container className='bg-background'>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form className='bg-background'>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Name' />
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Link to="/">
                                <Components.Button className='bg-primary '>Sign Up</Components.Button>
                            </Link>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button className='bg-primary' onClick={handleSignIn}>Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn} className='bg-primary'>

                            <Components.LeftOverlayPanel signinIn={signIn} >
                                <Components.Title className='text-background'>Welcome Back!</Components.Title>
                                <Components.Paragraph className='text-background'>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)} className='border-2 border-background text-background'>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title className='text-background'>Hello, Friend!</Components.Title>
                                <Components.Paragraph className='text-background'>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)} className='border-2 border-background text-background'>
                                    Sign UP
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>

                </Components.Container>
            </div>
        </>
    )
}

export default Login;
