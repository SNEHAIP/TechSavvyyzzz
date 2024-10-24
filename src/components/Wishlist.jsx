import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // Fetch wishlist data from localStorage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    setWishlist(storedWishlist); // Set wishlist from localStorage
  }, []);

  // Remove item from wishlist using the unique _id (or itemId)
  const removeFromWishlist = (_id) => {
    const updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem._id !== _id);

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update localStorage
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>Your Wishlist</h3>
        <ul className="list-group">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ₹{item.price}
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromWishlist(item._id)} // Remove using _id
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li className="list-group-item">Your wishlist is empty.</li>
          )}
        </ul>
        <div className="text-center my-3">
          <button className="btn btn-primary" onClick={() => navigate('/userfood')}>
            Go Back to Food List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;