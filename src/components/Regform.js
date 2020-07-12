import React, { Component } from 'react'
import axios from 'axios'

export class Regform extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        name === 'email' ? this.setState({ email: value }) : this.setState({ password: value });
        
    }

    handleSave() {
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('/auth/register', user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        //window.location.reload(true);

    }
    
    render() {
        return (
            <div className='w-25 container text-primary border border-primary rounded mt-5' style={{backgroundColor: "#fceed1"}}>
                <form className='was-validated'>
                    <p className='text-center h6 mt-4 mb-4 font-weight-bold'><u>Create new User</u></p>
                    <div className='form-group'>
                        <label for='validationInput'>Email</label>
                        <input type='email' id='validationInput' className='form-control is-invalid' placeholder='Enter email address' required name='email' onChange={this.handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label for='password'>Password</label>
                        <input type='password' id='password' className='form-control is-invalid' placeholder='Enter Password' required name='password' onChange={this.handleChange}></input>
                    </div>

                    <div className='form-group text-center'>
                        <button type='button' id='login' className='btn btn-primary btn-lg' onClick={this.handleSave}>Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Regform
