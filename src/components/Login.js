import React from 'react'

function Login() {
    return (
        <div className='w-25 container text-primary border border-primary rounded mt-5' style={{backgroundColor: "#fceed1"}}>
            <form className='was-validated'>
                <p className='text-center h6 mt-4 mb-4 font-weight-bold'><u>Enter your Login Details</u></p>
                <div className='form-group'>
                    <label for='validationInput'>Email</label>
                    <input type='email' id='validationInput' className='form-control is-invalid' placeholder='Enter username' required></input>
                </div>
                <div className='form-group'>
                    <label for='password'>Password</label>
                    <input type='password' id='password' className='form-control is-invalid' placeholder='Enter Password' required></input>
                </div>
                <div className='form-group form-check'>
                    <input type='checkbox' id='checkboxx' className='form-check-input'></input>
                    <label for='checkboxx' className="form-check-label">keep me signed in</label>
                </div>
                <div className='form-group text-center'>
                    <button type='button' id='login' className='btn btn-primary btn-lg'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
