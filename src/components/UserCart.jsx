import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import autotable for generating tables in PDF

const UserCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const userId = sessionStorage.getItem('userid'); // Get the logged-in user's ID
    
    // Filter cart items to only include those belonging to the logged-in user
    const userCart = savedCart.filter(item => item.userid === userId);
    
    setCart(userCart);  // Set the filtered cart to state
  }, []);

  // Remove item from the cart
  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove); // Filter out the removed item
    setCart(updatedCart); // Update the cart state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the updated cart to localStorage
  };

  // Calculate the total amount based on item price and quantity
  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

  // Function to generate PDF bill
  const generatePDF = () => {
    const doc = new jsPDF();
    const billNumber = Math.floor(Math.random() * 100000); // Generate a random bill number

    // Add title and bill number to the PDF
    doc.setFontSize(20);
    doc.text('Bill', 14, 20);
    doc.setFontSize(12);
    doc.text(`Bill Number: ${billNumber}`, 14, 30);

    // Add the table headers
    const tableColumn = ['Item Name', 'Price', 'Quantity', 'Total'];
    const tableRows = cart.map(item => [
      item.name,
      item.price,
      item.quantity,
      (parseFloat(item.price) * item.quantity).toFixed(2),
    ]);

    // Create a table in the PDF
    doc.autoTable(tableColumn, tableRows, { startY: 40 });
    
    // Add the total amount at the bottom
    doc.text(`Total Amount: ₹${totalAmount.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

    // Save the PDF
    doc.save(`bill_${billNumber}.pdf`);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>Your Cart</h3>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                {item.name} - ₹{item.price} x {item.quantity} 
              </div>
              <div>
                ₹{(parseFloat(item.price) * item.quantity).toFixed(2)} {/* Item total */}
              </div>
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => removeItem(index)} // Call removeItem when the button is clicked
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="my-3">
          <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4> {/* Display total sum with two decimal places */}
        </div>
         {/* Pay Now Button */}
         <div className="text-center">
          <button 
            className="btn btn-success"
            onClick={generatePDF} // Handle pay now button click to generate PDF
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;