import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container d-flex">
                    <ul className='d-flex'>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Help</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Term & Conditions</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="https://github.com/ToufikGouri" target='blank'>&copy;Toufik Gouri</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer