import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{
                backgroundColor: 'transparent',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '0.5rem 1rem'
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#000',
                        fontFamily: 'Georgia, serif',
                        textDecoration: 'none'
                    }}>
                        MEALMATE
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto" style={{ alignItems: 'center' }}>
                            {[
                                { name: "Home", link: "/home" },
                                { name: "Food", link: "/userfood" },
                                { name: "Profile", link: "/userprofile" },
                                { name: "Feedback", link: "/feedback" },
                                { name: "About", link: "/about" },
                                { name: "Wishlist", link: "/wishlist" },
                                { name: "Cart", link: "/usercart" },
                            ].map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" href={item.link} style={{
                                        color: '#555',
                                        fontSize: '1rem',
                                        padding: '0.5rem 1rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s',
                                    }}
                                        onMouseEnter={e => e.target.style.color = '#007bff'}
                                        onMouseLeave={e => e.target.style.color = '#555'}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className="nav-item">
                                <button className="btn" onClick={handleLogout} style={{
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginLeft: '1rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '5px',
                                    border: 'none',
                                    transition: 'background-color 0.3s',
                                }}
                                    onMouseEnter={e => e.target.style.backgroundColor = '#c82333'}
                                    onMouseLeave={e => e.target.style.backgroundColor = '#dc3545'}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar