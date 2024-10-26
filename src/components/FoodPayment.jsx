import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const FoodPayment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cart = [], totalAmount = 0 } = location.state || {};
    const [selectedPayment, setSelectedPayment] = useState(null);
    const qrCodeRef = useRef();

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/usercart'); // Redirect if cart is empty
        }
    }, [cart, navigate]);

    const qrDataGPay = `Payment of ₹${totalAmount} via GPay`;
    const qrDataPhonePe = `Payment of ₹${totalAmount} via PhonePe`;

    const handlePaymentSelect = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    const updateQuantity = async (orderItems) => {
        try {
            for (const item of orderItems) {
                // Log the ID of each item before making the request
                console.log("Fetching item with ID:", item._id);
                
                // Fetch the current item quantity
                const response = await axios.get(`http://localhost:8080/foodItem/${item._id}`);
                const currentQuantity = response.data.quantity;
    
                // Calculate the new quantity
                const newQuantity = currentQuantity - item.bookedQuantity;
    
                // Update the database
                await axios.put(`http://localhost:8080/foodItem/${item._id}`, { quantity: newQuantity });
            }
        } catch (error) {
            console.error("Failed to update quantities:", error);
        }
    };
    
    

    const handlePaymentSuccess = async () => {
        alert('Payment successful!');
        await updateQuantity(cart);  // Update quantities after payment
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        const billNumber = Math.floor(Math.random() * 100000);

        doc.setFontSize(20);
        doc.text('Bill', 14, 20);
        doc.setFontSize(12);
        doc.text(`Bill Number: ${billNumber}`, 14, 30);

        const tableColumn = ['Item Name', 'Price', 'Quantity', 'Total'];
        const tableRows = cart.map(item => [
            item.name,
            item.price,
            item.quantity,
            (parseFloat(item.price) * item.quantity).toFixed(2),
        ]);

        doc.autoTable(tableColumn, tableRows, { startY: 40 });
        doc.text(`Total Amount: ₹${totalAmount.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);
        doc.save(`bill_${billNumber}.pdf`);
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: 'auto',
            padding: '30px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
        }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>Payment for Your Order</h2>
            <p style={{ marginBottom: '30px', color: '#555' }}>Total Price: ₹{totalAmount.toFixed(2)}</p>
            <p style={{ marginBottom: '30px', color: '#555' }}>Please select a payment method:</p>

            <div style={{ marginBottom: '30px' }}>
                <button
                    onClick={() => handlePaymentSelect('GPay')}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '15px',
                        transition: 'background-color 0.3s ease',
                        fontSize: '16px'
                    }}
                    onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'}
                    onMouseLeave={e => e.target.style.backgroundColor = '#007bff'}
                >
                    Pay with GPay
                </button>
                <button
                    onClick={() => handlePaymentSelect('PhonePe')}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        fontSize: '16px'
                    }}
                    onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'}
                    onMouseLeave={e => e.target.style.backgroundColor = '#007bff'}
                >
                    Pay with PhonePe
                </button>
            </div>

            {selectedPayment && (
                <>
                    <p style={{ marginBottom: '20px', color: '#555' }}>
                        Please scan the QR code to complete your payment via {selectedPayment}.
                    </p>
                    <div style={{ marginBottom: '20px' }} ref={qrCodeRef}>
                        {selectedPayment === 'GPay' && (
                            <>
                                <h3 style={{ marginBottom: '10px', color: '#007bff' }}>GPay</h3>
                                <QRCodeCanvas value={qrDataGPay} size={200} />
                            </>
                        )}
                        {selectedPayment === 'PhonePe' && (
                            <>
                                <h3 style={{ marginBottom: '10px', color: '#007bff' }}>PhonePe</h3>
                                <QRCodeCanvas value={qrDataPhonePe} size={200} />
                            </>
                        )}
                    </div>

                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <button onClick={handlePaymentSuccess} style={{
                            padding: '12px 24px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            margin: '0 10px',
                            transition: 'background-color 0.3s ease',
                            fontSize: '16px'
                        }}
                            onMouseEnter={e => e.target.style.backgroundColor = '#218838'}
                            onMouseLeave={e => e.target.style.backgroundColor = '#28a745'}
                        >
                            Simulate {selectedPayment} Payment Success
                        </button>

                        <button onClick={generatePDF} style={{
                            padding: '12px 24px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            margin: '0 10px',
                            transition: 'background-color 0.3s ease',
                            fontSize: '16px'
                        }}
                            onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'}
                            onMouseLeave={e => e.target.style.backgroundColor = '#007bff'}
                        >
                            Download Invoice
                        </button>
                    </div>
                </>
            )}

            <div style={{ marginTop: '30px' }}>
                <button onClick={() => navigate('/usercart')} style={{
                    padding: '12px 24px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s ease'
                }}
                    onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'}
                    onMouseLeave={e => e.target.style.backgroundColor = '#007bff'}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default FoodPayment;