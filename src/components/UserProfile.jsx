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
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ fontSize: '1.5rem', color: '#007bff' }}>Loading...</div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <h2 style={{ fontWeight: 'bold', color: '#333' }}>User Profile</h2>
            </div>
            {userData ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '500px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '2rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#f9f9f9'
                    }}>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0.5rem' }}>
                            <strong style={{ color: '#333' }}>Name:</strong> {userData.name}
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0.5rem' }}>
                            <strong style={{ color: '#333' }}>Email:</strong> {userData.email}
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0.5rem' }}>
                            <strong style={{ color: '#333' }}>Address:</strong> {userData.address}
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0.5rem' }}>
                            <strong style={{ color: '#333' }}>Phone:</strong> {userData.phone}
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0.5rem' }}>
                            <strong style={{ color: '#333' }}>Gender:</strong> {userData.gender}
                        </p>
                    </div>
                </div>
            ) : (
                <p style={{ textAlign: 'center', color: '#888' }}>No user data found.</p>
            )}
        </div>
    );
};

export default UserProfile;
