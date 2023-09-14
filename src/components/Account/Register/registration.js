import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Registration(props) {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email=formData.email;
        const name= formData.name;
        const lastName= formData.lastName;
        const phoneNumber= formData.phoneNumber;
        const password= formData.password;
        const confirmPassword= formData.confirmPassword;


        props.onRegister(name,lastName,email,password,confirmPassword,phoneNumber);
        navigate("/account/login");
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
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="lastName">Last Name</label>
                        <br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <br />
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="phoneNumber"
                            className="form-control"
                            value={formData.phoneNumber}
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
                    <div className="form-group col-sm-12">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <br />
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirmPassword"
                            className="form-control"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 btn-submit">
                            <button type="submit" className="btn btn-success">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Registration;