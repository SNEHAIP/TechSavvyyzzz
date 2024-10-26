import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.clear();
        // Redirect to login page
        navigate("/");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MEALMATE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/userfood">Food</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/userprofile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/feedback">Feedback</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/wishlist">Wishlist</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/orderreport">Order History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/usercart">Cart</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
