import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

export default function Signup() {
    return (
        <div class="wrapper">
            <h1>Registration form</h1>

            <div class="form-container">
                <form action="" method="post">

                    <div class="flex">
                        <div class="flex-item">

                            <div class="field-container">
                                <label for="full-name">Full Name: <span class="required">*</span></label>
                                <input type="text" name="full-name" pattern="^([a-zA-Z]{2,} ?)+$" id="full-name" placeholder="Your full name" required="required" />
                                <span class="error-messg"></span>
                            </div>

                            <div class="field-container">
                                <label for="email">Email: <span class="required">*</span></label>
                                <input type="email" name="email" id="email" placeholder="Your email" required="required" />
                                <span class="error-messg"></span>
                            </div>


                            <div class="field-container">
                                <label for="confirm-email">Confirm email: <span class="required">*</span></label>
                                <input type="email" name="confirm-email" id="confirm-email" placeholder="Re-enter email" required="required" />
                                <span class="error-messg"></span>
                            </div>

                        </div>
                        <div class="flex-item">

                            <div class="field-container">
                                <label for="contact-no">Contact no.: <span class="required">*</span></label>
                                <input type="tel" name="contact-no" id="contact-no" placeholder="Mobile number" required="required" />
                    <span class="error-messg"></span>
                            </div>


                            <div class="field-container">
                                <label for="passkey">Password: <span class="required">*</span></label>
                                <div class="passkey-box">
                                    <input type="password" name="passkey" id="passkey" class="passkey" placeholder="Password" required="required" />
                                    <span class="passkey-icon" data-display-passkey="off"><i class="fas fa-eye"></i>  </span>
                                </div>
                                <span class="error-messg"></span>
                            </div>


                            <div class="field-container">
                                <label for="confirm-passkey">Confirm password: <span class="required">*</span></label>
                                <div class="passkey-box">
                                    <input type="password" name="confirm-passkey" class="passkey" id="confirm-passkey" placeholder="Re-enter password" required="required" />
                                    <span class="passkey-icon" data-display-passkey="off"><i class="fas fa-eye"></i></span>
                                </div>
                                <span class="error-messg"></span>
                            </div>

                        </div>
                    </div>

                    <div class="center"><Link to="/login"><input type="submit" value="Register"/></Link></div>
    </form>
    </div>

            </div>

    )
}
