// UserProfile.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const email = sessionStorage.getItem("email"); // Retrieve email from session storage
            if (!email) {
                alert("Please log in to view your profile.");
                navigate("/"); // Redirect to login if no email found
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/userProfile/${email}`);
                
                // Check if user data was returned
                if (response.data) {
                    setUserData(response.data);
                } else {
                    alert("No user data found.");
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                alert("Error fetching profile information.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>; // Display loading indicator
    }

    return (
        <div>
            <Navbar/>
            <center><h2>User Profile</h2></center>
            {userData ? (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Address:</strong> {userData.address}</p>
                            <p><strong>Phone:</strong> {userData.phone}</p>
                            <p><strong>Gender:</strong> {userData.gender}</p>
                        </div>
                    </div>
                    
                </div>
            ) : (
                <p>No user data found.</p>
            )}
        </div>
    );
};

export default UserProfile;
