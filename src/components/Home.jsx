import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css'; // Import the CSS file for background animation

const Home = () => {

    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExample');
        if (carouselElement) {
            const carousel = new window.bootstrap.Carousel(carouselElement, {
                interval: 2000,  // Auto-slide every 2 seconds
                ride: 'carousel'
            });
        }
    }, []);

    return (
        <div className="dynamic-background" style={{ minHeight: "100vh" }}>
            <Navbar />
            <center className="mt-5">
                <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#2c3e50" }}>Welcome to MEAL MATE</h1>
                <p style={{ fontSize: "1.5rem", color: "#7f8c8d", marginBottom: "40px" }}>Affordable, Sustainable, Delicious</p>
            </center>

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide container mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.2rg21HN_stF34nHKgiVq-QHaEQ&pid=Api&P=0&h=180" className="d-block w-100 rounded" alt="Surplus food" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.RzJfmrSX00YO7lRLmf7GiAHaE8&pid=Api&P=0&h=180" className="d-block w-100 rounded" alt="Meal prep" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.QhVxGDUdpaHoH2Lm7_uY1QHaE8&pid=Api&P=0&h=180" className="d-block w-100 rounded" alt="Fresh food" height="400px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse3.mm.bing.net/th?id=OIP._TlsPqo9cdqiP_sodVVYSQHaE0&pid=Api&P=0&h=180" className="d-block w-100 rounded" alt="Healthy meal" height="400px" />
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
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#16a085" }}>Our Menu</h2>
                <p style={{ fontSize: "1.2rem", color: "#95a5a6" }}>Explore delicious meals available at half-price!</p>
                <div className="container">
                    <img 
                        src="https://imgv2-2-f.scribdassets.com/img/document/88267532/original/d6917d513f/1668209016?v=1" 
                        className="d-block w-100 rounded shadow-lg" 
                        alt="Menu" 
                        height="700px" 
                        style={{ transition: "transform 0.3s ease", cursor: "pointer" }}
                        onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                </div>
            </center>
        </div>
    );
};

export default Home;
