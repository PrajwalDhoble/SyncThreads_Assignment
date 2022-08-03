import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { AuthContext } from '../Context/AuthContext';
import "./Login.css"

const Login = () => {

    const navigate = useNavigate()

    const { setUserName, setToken } = useContext(AuthContext);
    // console.log('setToken:', setToken)
    // console.log('setUserName:', setUserName)
    // console.log('name:', name)

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        const { id, value } = e.target
        // console.log(id, value)

        setLogin({ ...login, [id]: value })

    }


    const handleSubmit = () => {

        // console.log('yes')
        axios.post('https://syncthreadsbackend.herokuapp.com/login', login).then(({ data }) => {
            console.log(data)
            console.log(data.user.email)
            console.log(data.user.password)


            if (data.user.email != "") {
                alert('Login Successful')
                setToken(data.token)
                setUserName(data.user.name)
                navigate('/Home')
                // handleLogin(data.token, data.user.name)
            }
            else {
                alert('user not logged in')
            }


        }).catch((e) => {
            console.log(e)
        })


    }








    return (
        <>
            <div className='LoginMainBox'>
                <div className='idPassBox'>
                    <label>Email</label>
                    <br />
                    <input type="text" className='inputBar' id='email' onChange={handleChange} />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" className='inputBar' id='password' onChange={handleChange} />
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label>Remember Me</label>
                    <div className='buttonBox'>
                        <p className='forget'>Forgot your password?</p>
                        <button className='button' onClick={handleSubmit}>LOG IN</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login