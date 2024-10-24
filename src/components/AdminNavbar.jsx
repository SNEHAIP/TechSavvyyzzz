import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to login page
    navigate("/");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MEALMATE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/adminhome">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/AddFood">Food Management</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/profilemanagement">Profile Management</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/feedbackmanagement">Feedback Management</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/order_historymanagement">Order-History</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNavbar