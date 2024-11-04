import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <nav 
        className="navbar navbar-expand-lg" 
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px 20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="container-fluid">
          <a 
            className="navbar-brand" 
            href="#" 
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#000",
              fontFamily: "Georgia, serif",
              letterSpacing: "1px",
            }}
          >
            MEALMATE
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            style={{
              border: "none"
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ alignItems: "center" }}>
              <li className="nav-item">
                <a 
                  className="nav-link active" 
                  aria-current="page" 
                  href="/adminhome"
                  style={{
                    color: "#555",
                    fontWeight: "500",
                    padding: "8px 15px",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/AddFood"
                  style={{
                    color: "#555",
                    fontWeight: "500",
                    padding: "8px 15px",
                  }}
                >
                  Food Management
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/profilemanagement"
                  style={{
                    color: "#555",
                    fontWeight: "500",
                    padding: "8px 15px",
                  }}
                >
                  Profile Management
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/feedbackmanagement"
                  style={{
                    color: "#555",
                    fontWeight: "500",
                    padding: "8px 15px",
                  }}
                >
                  Feedback Management
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/order_historymanagement"
                  style={{
                    color: "#555",
                    fontWeight: "500",
                    padding: "8px 15px",
                  }}
                >
                  Order History
                </a>
              </li>
              <li className="nav-item">
                <button 
                  className="btn btn-danger ms-3" 
                  onClick={handleLogout}
                  style={{
                    fontWeight: "500",
                    padding: "8px 15px",
                    borderRadius: "5px"
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
