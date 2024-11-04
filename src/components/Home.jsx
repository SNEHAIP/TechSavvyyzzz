import React, { useEffect } from 'react';
import Navbar from './Navbar';

const Home = () => {
    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExample');
        if (carouselElement) {
            const carousel = new window.bootstrap.Carousel(carouselElement, {
                interval: 2000,
                ride: 'carousel'
            });
        }
    }, []);

    return (
        <div style={{ minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <Navbar />
            <center style={{ marginTop: "3rem" }}>
                <h1 style={{
                    fontSize: "3.5rem",
                    fontWeight: "700",
                    color: "#2c3e50",
                    marginBottom: "20px",
                    letterSpacing: "2px"
                }}>Welcome to MEAL MATE</h1>
                <p style={{
                    fontSize: "1.5rem",
                    color: "#7f8c8d",
                    marginBottom: "30px",
                    fontWeight: "300"
                }}>Affordable, Sustainable, Delicious</p>
            </center>

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide container mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Surplus food" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Meal prep" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Fresh food" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Healthy meal" height="400px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Menu Section */}
            <center className="mt-5">
                <h2 style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#16a085",
                    marginTop: "50px",
                    letterSpacing: "1px"
                }}>Our Menu</h2>
                <p style={{
                    fontSize: "1.2rem",
                    color: "#95a5a6",
                    marginBottom: "30px"
                }}>Explore delicious meals available at half-price!</p>
                <div className="container">
                    <img
                        src="https://imgv2-2-f.scribdassets.com/img/document/88267532/original/d6917d513f/1668209016?v=1"
                        className="d-block w-100 rounded shadow-lg"
                        alt="Menu"
                        height="700px"
                        style={{
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                </div>
            </center>
        </div>
    );
};

export default Home;
