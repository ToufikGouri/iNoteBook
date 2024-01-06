import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Favicon from '../iNoteBook Logo.png'

const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/logout')
    }

    return (
        <nav>
            <div>
                <Link className="navbar-brand" to="/"><img src={Favicon} alt="" /> iNoteBook</Link>
            </div>
            {!localStorage.getItem('token') ? <form className="d-flex">
                <Link className="btn btn-outline-light mx-1" to="/login" role="button">Log In</Link>
                <Link className="btn btn-outline-light mx-1" to="/signup" role="button">Sign Up</Link>
            </form> : <button onClick={handleLogout} className='btn btn-outline-light'>Log Out</button>}
        </nav>
    )
}

export default Navbar