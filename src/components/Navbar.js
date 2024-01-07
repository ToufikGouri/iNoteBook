import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Favicon from '../iNoteBook Logo.png'

const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/logout')
    }

    // To change the title for each page 
    const location = useLocation()
    useEffect(() => {
        location.pathname === "/" && (document.title = "iNoteBook - Your notebook on the cloud")
        location.pathname === "/login" && (document.title = "Login - iNoteBook")
        location.pathname === "/logout" && (document.title = "iNoteBook - Your notebook on the cloud")
        location.pathname === "/signup" && (document.title = "Sign Up - iNoteBook")
    }, [location.pathname])

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