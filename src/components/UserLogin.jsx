import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserLogin.css'; // Import the CSS file

const UserLogin = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = async () => {
        try {
            const response = await axios.post("http://localhost:8080/userSignIn", data);
            console.log(response.data);

            if (response.data.status === "success") {
                sessionStorage.setItem("email", data.email);
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("userid", response.data.userid);
                console.log("userid");
                navigate("/home");
            } else {
                alert("ERROR: " + response.data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
        }
    };

    const Adminlogin = () => {
        sessionStorage.clear();
        navigate("/Adminlogin");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <center>
                    <h1 className="login-title">USER LOGIN</h1>
                </center>
                <div className="row g-3">
                    <div className="col col-12">
                        <label className="form-label">EMAIL ID</label>
                        <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12">
                        <label className="form-label">PASSWORD</label>
                        <input type="password" name="password" className="form-control" value={data.password} onChange={inputHandler} />
                    </div>
                    <center>
                        <div className="col col-12 col-sm-6">
                            <button className="btn btn-success login-btn" onClick={readValue}>LOGIN</button>
                        </div>
                        <br />
                        <div className="col col-12 col-sm-6">
                            <button className="btn btn-secondary login-btn" onClick={Adminlogin}>ADMIN LOGIN</button>
                        </div>
                    </center>
                    <div>
                        <center>
                            <Link className="nav-link" to="/userSignUp">SIGNUP</Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
