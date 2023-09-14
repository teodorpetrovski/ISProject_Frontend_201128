import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Login (props) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email=formData.email;
        const password= formData.password;

        props.onLogin(email,password);
        navigate("/tickets");
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="registerdiv">
                    <div className="form-group col-sm-12">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12 btn-submit">
                            <button type="submit" className="btn btn-success">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;