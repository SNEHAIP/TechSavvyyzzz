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
                }}>Welcome to SIP GREEN</h1>
                <p style={{
                    fontSize: "1.5rem",
                    color: "#7f8c8d",
                    marginBottom: "30px",
                    fontWeight: "300"
                }}>Recycle, Reuse, Restore</p>
            </center>

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide container mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/256148/pexels-photo-256148.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Recycling bins" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/933053/pexels-photo-933053.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Recycled paper products" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1406333/pexels-photo-1406333.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Eco-friendly packaging" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/4039440/pexels-photo-4039440.jpeg?auto=compress&cs=tinysrgb&w=600"
                             className="d-block w-100 rounded shadow-sm" alt="Recycled paper crafts" height="400px" />
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
        </div>
    );
};

export default Home;