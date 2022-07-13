import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css'

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    //Log in a demo user
    const demoOnClick = (e) => {
        return dispatch(sessionActions.login({
            credential: "StrawberryFam",
            password: "password"
        }))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="loginForm create">
                <ul className="signup">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label className="signup">
                    Email
                </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="signup"
                />
                <label className="signup">
                    Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="signup"
                />
                <label className='signup'>
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="signup"
                />
                <label className='signup'>
                    Confirm Password
                </label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="signup" />
                <button style={{height: '40px'}} type="submit" className="sign-up-button">Sign Up</button>
                <button
                    type='submit'
                    onClick={demoOnClick}
                    className="sign-up-button demo">
                    Demo User
                </button>
            </form>
        </>
    );
}

export default SignupForm;