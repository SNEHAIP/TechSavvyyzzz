import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const UserSignup = () => {
    const [data, setData] = useState({
        name: "",
        address: "",
        phone: "",
        gender: "",
        password: "",
        confirm: "",
        email: ""
    });
    const navigate = useNavigate();

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = async () => {
        if (data.password === data.confirm) {
            try {
                const response = await axios.post("http://localhost:8080/userSignUp", data);
                console.log(response.data);

                if (response.data.status === "success") {
                    // Store email in session storage for future use
                    sessionStorage.setItem("email", data.email);
                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("userid", response.data.userid);
                    alert("successfully registered")
                    // Navigate to another page after successful sign-up
                } else {
                    alert("ERROR: " + response.data.message);
                }
            } catch (error) {
                console.error("Error during sign-up:", error);
                alert("Sign-up failed. Please try again.");
            }
        } else {
            alert("Passwords do not match.");
        }
    };

    return (
        <div>
          
            <center><h2>REGISTER</h2></center>
            <div className="container">
                <div className="col col-12">
                    <div className="row g-3">
                        <div className="col">
                            <label className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col">
                            <label className="form-label">EMAIL</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col">
                            <label className="form-label">ADDRESS</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                        </div>
                        <div className="col">
                            <label className="form-label">PHONE NO</label>
                            <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                        </div>
                        <div className="col">
                            <label className="form-label">GENDER</label>
                            <select className="form-select" name='gender' value={data.gender} onChange={inputHandler}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="col">
                            <label className="form-label">PASSWORD</label>
                            <input type="password" name="password" className="form-control" value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col">
                            <label className="form-label">CONFIRM PASSWORD</label>
                            <input type="password" name="confirm" className="form-control" value={data.confirm} onChange={inputHandler} />
                        </div>
                        <center>
                            <div className="col">
                                <button className="btn btn-info" onClick={readValue}>REGISTER</button>
                            </div>
                        </center>
                        <div>
                            <center>
                                <Link className="nav-link" to="/">LOGIN</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSignup;
