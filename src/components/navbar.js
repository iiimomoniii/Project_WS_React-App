import React from 'react';
import { Link }from 'react-router-dom';
//ทำlink เพื่อใช้กลับไปที่ หน้า index.js 
export default class Navbar extends React.Component{
    render () {
        return (
            <nav className="navbar">
                <h1><Link to="/">ReactNotes</Link></h1>
                <div className="navbar-button">
                    <Link to="/new" className="btn">New Note</Link>
                </div>
            </nav>
        );
    }
}