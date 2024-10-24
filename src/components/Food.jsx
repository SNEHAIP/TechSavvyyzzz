import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Food = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);
  const [message, setMessage] = useState('');
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  // Fetch food data from the backend
  const fetchData = () => {
    axios.post('http://localhost:8080/ViewFood', data)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const addToCart = (item) => {
    const quantity = quantities[item._id] || 1;
    const userId = sessionStorage.getItem('userid'); 
    if (!userId) {
      alert('User not logged in!');
      return;
    }

    const itemWithQuantity = { ...item, quantity, userid: userId };
    const updatedCart = [...cart, itemWithQuantity];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setMessage(`${item.name} added to cart with quantity ${quantity} successfully!`);
    setTimeout(() => setMessage(''), 2000);
  };

// Handle add to wishlist
const addToWishlist = (item) => {
  const userId = sessionStorage.getItem('userid'); // Get logged-in user's id
  if (!userId) {
    alert('User not logged in!');
    return;
  }

  const itemWithUser = { ...item, userid: userId }; // Attach userid to the wishlist item

  // Check if item already exists in wishlist
  const existingItem = wishlist.find(wishlistItem => wishlistItem._id === item._id);
  const updatedWishlist = existingItem
    ? wishlist // If item is already in wishlist, do nothing (or you can choose to update)
    : [...wishlist, itemWithUser]; // Add new item

  setWishlist(updatedWishlist);
  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage

  setMessage(`${item.name} added to wishlist!`);
  setTimeout(() => setMessage(''), 2000);
};


  const goToCart = () => {
    navigate('/usercart');
  };

  const goToWishlist = () => {
    navigate('/wishlist');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="row">
              {data.map((value, index) => (
                <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card">
                    <img src={value.image} className="card-img-top" alt="Food" height="200px" />
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">Quantity Available: {value.quantity}</p>
                      <p className="card-text">Price: {value.price}</p>

                      <label>Quantity:</label>
                      <input
                        type="number"
                        value={quantities[value._id] || 1}
                        onChange={(e) => handleQuantityChange(value._id, parseInt(e.target.value))}
                        min="1"
                        max={value.quantity}
                        className="form-control mb-2"
                      />

                      <button className="btn btn-primary" onClick={() => addToCart(value)}>
                        Add to Cart
                      </button>
                      <br></br>
                      <br></br>
                      <button className="btn btn-secondary" onClick={() => addToWishlist(value)} >
                        Add to Wishlist
                      </button>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}

        <div className="text-center my-3">
          <button className="btn btn-success" onClick={goToCart}>Go to Cart</button>
          <button className="btn btn-warning" onClick={goToWishlist} style={{ marginLeft: '10px' }}>Go to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Food;