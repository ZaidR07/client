import React, { useState } from 'react';
import * as Components from './Components/Login_components/Login_style';
import axios from 'axios';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { uri } from './constant';

// const SERVER = process.env.server;

const Login_plus_register = ({ setIsLoggedIn , setAdminLoggedIn}) => {
    const [signIn, toggle] = React.useState(true);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [loginemail, loginsetEmail] = useState();
    const [loginpassword, loginsetPassword] = useState();

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const notify = (username) => toast("Welcome " + username, {
        style: {},
        progressClassName: 'custom-toast-progress'
    });

    const notify1 = () => toast(" Login Succesffully ", {
        style: {},
        progressClassName: 'custom-toast-progress'
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${uri}signup`, {
                username: username,
                email: email,
                password: password
            });
            console.log(response.data);
            if (response.data.status) {
                notify(username);
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', response.data.user.email);
                localStorage.setItem('username', response.data.user.username);
                navigate('/Survey');
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    const handleSubmit1 = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${uri}login`, {
                email: loginemail,
                password: loginpassword,
            });
            if (response.data.userlogin) {
                notify1();
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
                setAdminLoggedIn(false);
                localStorage.setItem('userEmail', response.data.user.email);
                localStorage.setItem('username', response.data.user.username);
                navigate('/Home');
            }
            if(response.data.status){
                alert("Incorrect User Credentials");
            }
            if(response.data.admin){
                console.log(response.data);
                setAdminLoggedIn(true);
                localStorage.setItem('adminLoggedIn', 'true');
                toast.success("Admin login Successful");
                navigate('/Admin_panel');


            }

            


            
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Styledloginplusregister>
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSubmit}>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Name' onChange={(e) => setUsername(e.target.value)} />
                            <Components.Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Components.Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSubmit1}>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' onChange={(e) => loginsetEmail(e.target.value)} />
                            <Components.Input type='password' placeholder='Password' onChange={(e) => loginsetPassword(e.target.value)} /> <br />
                            <Components.SignInButton>Sign In</Components.SignInButton>
                            <NavLink to={'/Forgot_password'}>
                                Forgot your password?
                            </NavLink><br />
                            
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </Styledloginplusregister>
            <CustomToastStyles />
        </>
    );
};

const Styledloginplusregister = styled.div`
    background-image: url('../Resorces/loginbg5.PNG');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const CustomToastStyles = styled.div`
    .custom-toast-progress {
        background-color: blue; // Change the color of the progress bar
    }
`;

export default Login_plus_register;