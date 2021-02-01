import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

export default function Login() {
    return (

        <div class="login">
            <div class="login-triangle"></div>

            <h2 class="login-header">Log in</h2>

            <form class="login-container">
                <p><input type="email" placeholder="Email" /></p>
                <p><input type="password" placeholder="Password" /></p>
                <Link to="/"><input type="submit" value="Log in" /></Link>
            </form>
        </div>

    )
}
