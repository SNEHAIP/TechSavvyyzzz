import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/AdminLogin", data).then((response) => {
            console.log(response.data)
            if (response.data.status === "success") {
                sessionStorage.setItem("token", response.data.token)
                sessionStorage.setItem("userid", response.data.userid)
                navigate("/adminhome")
            } else {
                alert("ERROR")
            }
        }).catch((err) => {
            console.error("Login failed", err)
        })
    }

    let navigate = useNavigate()

    return (
        <div style={{
            backgroundImage: 'url("https://example.com/background-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                width: '400px',
                height: '400px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                padding: '2rem',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
            }}>
                <center>
                    <h2>ADMIN LOGIN</h2>
                </center>
                <div className="row g-3 w-100">
                    <div className="col-12">
                        <label htmlFor="" className="form-label">EMAIL ID</label>
                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
                    </div>
                    <center>
                        <div className="col-12">
                            <button className="btn btn-success mt-3" onClick={readValue}>LOGIN</button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
