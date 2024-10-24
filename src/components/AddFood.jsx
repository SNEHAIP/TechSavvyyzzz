import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Adminviewfood from './AdminViewfood';

const AddFood = () => {
    const navigate = useNavigate();
    const Adminviewfood = () => {
      
      sessionStorage.clear();
      navigate("/adminviewfood");

  }
    const [data,setdata] = useState(
        {
            "name":" ",
            "image":" ",
            "quantity":" ",
           "price":" "
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      
      const readValue=()=>{
          console.log(data)
          axios.post("http://localhost:8080/AddFood",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                 {
                    alert("SUCCESSFULLY ADDED")
                } else {
                    alert("ERROR")
                }
            }
        ).catch()
      }
      
    return (
        <div>
            <AdminNavbar/>
            <div>
                <center><h2>FOODS</h2></center>
                <div className="conatiner">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">FoodID</label>
                                <input type="text" className="form-control" name='name' value={data.foodId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">IMAGE</label>
                                <input type="textarea" className="form-control" name='image' value={data.image} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">QUANTITY</label>
                                <input type="text" className="form-control" name='quantity' value={data.quantity} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PRICE</label>
                                <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                            </div>
                           

                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-info" onClick={readValue}>ADD</button>
                                </div>
                                <br></br>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-info" onClick={Adminviewfood}>VIEW</button>
                                </div>
                            </center>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}

            export default AddFood