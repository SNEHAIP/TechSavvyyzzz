import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
   
    <div className="container mt-5">
      <h2 className="text-center display-4">About Us</h2>
      <p className="text-center text-muted">
        A smarter way to enjoy affordable meals while reducing food waste in hostels!
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <img 
            src="https://lh4.googleusercontent.com/FdBKDMZz_N8Wu2aZHipGDEWQIDGePvRLqsfv7YTYwIlEGGyBTTOsimE8MxMS29h58KyKr7KJnDboj_XxgAhMXjspCF_edohWsHctqoYurIavF74iaKRiTII6G2vgE86LMpVrCj5padgG7-McHQ" 
            alt="Surplus food illustration" 
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-primary">Our Mission</h4>
          <p className="mt-3">
            At our Hostel Food Surplus Management System, we aim to bridge the gap between food waste and affordable dining. We believe that food should never go to waste when there are hungry students who need it. By connecting surplus food with students, we not only save food but also provide budget-friendly meal options for hostel residents.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h4 className="text-center text-success">Why Choose Us?</h4>
          <p className="text-center">
            Because it's not just about saving money — it's about saving the planet, too!
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-utensils fa-3x text-warning"></i>
          <h5 className="mt-3">Delicious Meals at Half Price</h5>
          <p>
            We offer students an exciting opportunity to order perfectly good surplus meals from hostel kitchens at half the regular price!
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-leaf fa-3x text-success"></i>
          <h5 className="mt-3">Sustainability</h5>
          <p>
            By reducing food waste, you're actively participating in making hostel life more eco-friendly. Every meal saved is a step toward sustainability.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-bell fa-3x text-info"></i>
          <h5 className="mt-3">Get Notified</h5>
          <p>
            Add your favorite meals to your wishlist and get notified as soon as they become available, so you never miss out on what you love.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h4 className="text-center text-danger">How It Works</h4>
        </div>
        <div className="col-md-6">
          <h5>For Students:</h5>
          <ul>
            <li>Browse surplus meals available in your hostel at a discount.</li>
            <li>Order your meal and get it delivered right to your doorstep at half the price.</li>
            <li>Manage your wishlist and receive notifications when meals you want are available.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>For Cafeteria Staff:</h5>
          <ul>
            <li>Log surplus food items into the system in just a few clicks.</li>
            <li>Track food inventory and minimize wastage effectively.</li>
            <li>Help contribute to a more sustainable hostel environment.</li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h4 className="text-center text-secondary">Join Us in Making a Difference!</h4>
          <p className="text-center">
            Together, we can enjoy delicious meals, save money, and protect the environment. Whether you're a student looking for an affordable meal or staff looking to reduce waste, our system makes it easy and impactful. Let's create a better future, one meal at a time!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
