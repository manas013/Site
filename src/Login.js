import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

import Home from './Home'
import "./Login.css";

function Login() {
    const history = useNavigate();





    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [meassage, setMessage]=useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        const signup = localStorage.getItem('signupDetails')
        console.log(signup)

        if (signup && signup.length) {
            const userdata = JSON.parse(signup)
            console.log(userdata)
            if(userdata.email=== formValues.email && userdata.password=== formValues.password){

            
                history('/Home');

            }else{
                setMessage('*password and email not match')
            }
        }

    };


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            // errors.email = "* Email is required!";
        } else if (!regex.test(values.email)) {
            // errors.email = " * This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = " * Password is required";
        } else if (values.password.length < 4) {
            // errors.password = " * Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            // errors.password = " * Password cannot exceed more than 10 characters";
        }

        return errors;
    };
    return (
        <>
           

            <div className="container">


                <form onSubmit={handleSubmit} className='BOX'>
                    <h2 id='k'>Log In</h2>
                    <div class="inputs">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <p>{formErrors.email}</p>

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />

                        <p>{formErrors.password}</p>

                        <button type="submit" >LOGIN</button>
                        <p>{meassage}</p>
                    </div>

                </form>
            </div>
        </>



    )
}

export default Login