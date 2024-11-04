import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

const Adminviewfood = () => {
  const [data, setData] = useState([]);
  const [quantityToRemove, setQuantityToRemove] = useState({});

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

  // Handle quantity update (reduce)
  const handleUpdateQuantity = (name, currentQuantity) => {
    const removeQuantity = quantityToRemove[name] || 0;

    // if (removeQuantity > currentQuantity) {
    //   alert('Cannot remove more than available quantity');
    //   return;
    // }

    axios.put(`http://localhost:8080/deletefood/${name}`, { quantityToRemove: removeQuantity })
      .then((response) => {
        console.log(response.data.message);
        fetchData();  // Refresh the list after quantity update
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Handle input change for quantity to remove
  const handleInputChange = (name, value) => {
    setQuantityToRemove((prevState) => ({
      ...prevState,
      [name]: parseInt(value) || 0,
    }));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar />
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
                      <p className="card-text">Quantity: {value.quantity}</p>
                      <p className="card-text">Price: {value.price}</p>
                      <input
                        type="number"
                        min="0"
                        max={value.quantity}
                        value={quantityToRemove[value.name] || ''}
                        onChange={(e) => handleInputChange(value.name, e.target.value)}
                        placeholder="update quantity"
                        className="form-control mb-2"
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUpdateQuantity(value.name, value.quantity)}
                      >
                        Update Quantity
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminviewfood;