import React from 'react'
import AdminNavbar from './AdminNavbar'

const AdminHome = () => {
  return (
    <div>
            <AdminNavbar />
            <center>
            <h1>MEAL MATE</h1>
            </center><br></br>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.Df0V1RgHsnhrxZ1ZrDZQfwHaE8&pid=Api&P=0&h=180" class="d-block w-100" alt="..." height="400px" width="250px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.Z0evIe-ip-oYZwPesVAAPwHaFj&pid=Api&P=0&h=180" class="d-block w-100" alt="..." height="400px" width="250px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.xW8jA4d3ayue0RlYAvDtjAHaE8&pid=Api&P=0&h=180" class="d-block w-100" alt="..." height="400px" width="250px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://tse3.mm.bing.net/th?id=OIP._TlsPqo9cdqiP_sodVVYSQHaE0&pid=Api&P=0&h=180" class="d-block w-100" alt="..." height="400px" width="250px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <center><br>
            </br>
            <h1>MENU</h1>
            <div>
            <img src="https://imgv2-2-f.scribdassets.com/img/document/88267532/original/d6917d513f/1668209016?v=1" class="d-block w-100" alt="..." height="700px" width="600px" />
            </div>
            </center>
        </div>
  )
}

export default AdminHome