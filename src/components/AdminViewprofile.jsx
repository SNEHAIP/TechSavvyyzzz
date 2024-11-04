import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import AdminNavbar from './AdminNavbar';

const AdminViewprofile = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getAllUsers'); // Fetch all users
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching user list:", error);
                alert("Error fetching user list.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Loading indicator while fetching users
    }

    return (
        <div>
            <AdminNavbar />
            <div className="container mt-5">
                <h2 className="text-center">All User Profiles</h2>
                {users.length > 0 ? (
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </div>
    );
};

export default AdminViewprofile;