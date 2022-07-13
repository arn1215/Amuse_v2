// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


    const onSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }


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
            
            <form
                onSubmit={onSubmit}
                className="loginForm"
                >
                <ul className="loginForm">
                    {errors.map((error) => <li key={error} className="errors">{error}</li>)}
                </ul>
                <label htmlFor="credential" className="loginForm">Username/Email</label>
                <input
                    id="credential"
                    name='credential'
                    type='text'
                    onChange={(e) => setCredential(e.target.value)}
                    value={credential}
                    className="loginForm" />
                <label htmlFor="password" className="loginForm">Password</label>
                <input
                    id="password"
                    name='password'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="loginForm" />
                <button
                    type='submit'
                    style={{height: '40px'}}
                    className="sign-up-button form">Continue</button>
            <button
                type='submit'
                onClick={demoOnClick}
                className="sign-up-button demo">Demo User
            </button>
            </form>
        </>
    )
}


export default LoginForm