import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

const OrderReport = () => {
    const [orders, setOrders] = useState([]); // State to hold the user's orders
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
  
    useEffect(() => {
      const fetchOrderHistory = async () => {
        const userId = sessionStorage.getItem('userid'); // Get the user ID from session storage
        
        try {
          const response = await fetch(`http://localhost:8080/orders/${userId}`); // Replace with your actual API URL
          
          if (!response.ok) {
            throw new Error('Failed to fetch orders');
          }
  
          const data = await response.json(); // Parse the JSON response
          setOrders(data); // Set the orders state
        } catch (error) {
          setError(error.message); // Set the error state if there's an error
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      };
  
      fetchOrderHistory(); // Call the fetch function
    }, [])
  return (
    <div>

<div>
      <Navbar/>
      <div className="container">
        <h3>Your Order History</h3>
        {orders.length > 0 ? (
          <ul className="list-group">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item">
                <h5>Order Date: {new Date(order.orderDate).toLocaleString()}</h5>
                <h6>Total Amount: ₹{order.totalAmount.toFixed(2)}</h6>
                <ul>
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.name} - ₹{item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p> // Message if no orders exist
        )}
      </div>
    </div>

    </div>
  )
}

export default OrderReport