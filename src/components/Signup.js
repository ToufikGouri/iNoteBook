import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' })

    // To toggle the password field
    const [showpass, setShowpass] = useState(false)
    const [confpass, setConfpass] = useState(false)

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, cpassword } = credentials;

        // If pass and confpass not matches
        if (password !== cpassword) {
            props.showAlert("Password Not Matched", "danger")
            return
        }

        const response = await fetch('https://inotebook-c0we.onrender.com/api/auth/createuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json()

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("Account Created Successfully", "success")
        }
        else {
            props.showAlert("Invalid Details", "danger")
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    return (
        <>
            <div className="container authContainer text-white" style={{ height: "595px" }}>
                <h2 className='text-center my-4'>Sign Up</h2>
                <form className='text-white d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange} required placeholder='Enter your name' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} required placeholder='Enter your email' />
                    </div>
                    <div className="mb-2 position-relative">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type={showpass ? "text" : "password"} className="form-control" id="password" name='password' onChange={onChange} minLength={5} required placeholder='Enter your password' />
                        <i onClick={() => setShowpass(!showpass)} className={`fa-regular fa-eye${showpass ? "" : "-slash"} eyeLogo loginLink mb-1`}></i>
                    </div>
                    <div className="mb-2  position-relative">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type={confpass ? "text" : "password"} className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required placeholder='Confirm your password' />
                        <i onClick={() => setConfpass(!confpass)} className={`fa-regular fa-eye${confpass ? "" : "-slash"} eyeLogo loginLink mb-1`}></i>
                    </div>
                    <button type="submit" className="btn btn-outline-success my-4">Submit</button>
                </form>

                <div className="text-center">
                    <p>Or Sign up with</p>
                    <div>
                        <i className="fa-brands fa-google mx-2 text-dark bg-light p-1 rounded-circle loginLink"></i>
                        <i className="fa-brands fa-facebook mx-2 text-dark bg-light p-1 rounded-circle loginLink"></i>
                        <i className="fa-brands fa-twitter mx-2 text-dark bg-light p-1 rounded-circle loginLink"></i>
                    </div>
                    <p className='my-2'>Already have an account? <Link to="/login" className='text-success text-decoration-none loginLink'>Login</Link> </p>
                </div>
            </div>
        </>
    )
}

export default Signup