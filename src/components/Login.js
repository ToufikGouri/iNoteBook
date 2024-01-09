import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/authPage.css"

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [showpass, setShowpass] = useState(false)
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('https://inotebook-c0we.onrender.com/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json()
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in Successfully", "success")
            navigate('/');
        } else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="authContainer container">
                <h2 className='text-white text-center my-4'>Login</h2>
                <form className='text-white d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                    <div className="mb-4 mx-5">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" placeholder="Type your username" />
                    </div>
                    <div className="mb-4 mx-5 position-relative">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type={showpass ? "text" : "password"} className="form-control " value={credentials.password} onChange={onChange} id="password" name='password' placeholder='Type your password' />
                        <i onClick={() => setShowpass(!showpass)} className={`fa-regular fa-eye${showpass ? "" : "-slash"} eyeLogo loginLink mb-1`}></i>
                        <Link className='text-light position-absolute text-decoration-none end-0 loginLink'>Forgot password?</Link>
                    </div>
                    <button type="submit" className="btn btn-outline-success my-5" >Login</button>
                </form>

                <div className="text-center">
                    <p>Or continue with</p>
                    <div>
                        <i className="fa-brands fa-google mx-2 text-dark bg-light p-1 rounded-circle loginLink"></i>
                        <i className="fa-brands fa-facebook mx-2 text-dark bg-light p-1 rounded-circle loginLink"></i>
                        <i className="fa-brands fa-twitter mx-2 text-dark bg-light p-1 rounded-circle loginLink"></i>
                    </div>
                    <p className='my-4'>Don't have an account? <Link to="/signup" className='text-success text-decoration-none loginLink'>Sign Up</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login