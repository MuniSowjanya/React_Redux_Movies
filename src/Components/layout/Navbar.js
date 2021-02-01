import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">ZeeMovies</Link>
                    </div>
                    {/* <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Movies</Link></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                    </ul> */}
                    <div className="d-flex flex-column space-between">
                    <ul className="nav navbar-nav navbar-right">
                     <li><Link to="/signin"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
