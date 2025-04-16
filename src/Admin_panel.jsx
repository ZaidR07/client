import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Workout from "./Components/Admin_components/Workout";
import axios from "axios";
import { uri } from "./constant";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { BsCart3 } from "react-icons/bs";
import { BsGrid1X2Fill } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const handleNavigation = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").slice(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  }
};





const Admin_panel = () => {
  const [totalusers, setTotalusers] = useState();
  const [totalproducts, setTotalproducts] = useState();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [updateclicked, setUpdateclicked] = useState(false);
  const [updateid, setUpdateid] = useState(null);
  const [deleteid, setDeleteid] = useState(null);
  const [deleteclicked, setDeleteclicked] = useState(null);


  const notify = () => toast("Product Added Successfully");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('category', category);

    const formData1 = new FormData();
    formData1.append('id', updateid)
    formData1.append('file', file);
    formData1.append('name', name);
    formData1.append('price', price);
    formData1.append('description', description);
    formData1.append('link', link);
    formData1.append('category', category);

    try {

      if (updateid == null) {
        const response = await axios.post(`${uri}Productadd`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response.status) {
          notify()
          // window.location.reload()
          handleLoad();



        }
      }


      if (updateid != null) {
        const response1 = await axios.post(`${uri}Productupdate`, formData1, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response1.status) {
          toast.success("Product Updated Successfully")
          // window.location.reload()
          handleLoad();

        }
      }


    } catch (error) {
      console.log(error);
    }
  }

  const handledelete = async () => {
    const dltresponse = await axios.post(`${uri}Productdlt`, {
      id: deleteid
    });
    if (dltresponse.status) {
      toast.success("Product Deleted")
      setDeleteclicked(false);
      handleLoad();


    }
  }

  const handlecancel = () => {
    const dlt = document.getElementById('overlaydelete');
    dlt.style.display = 'none';
    setDeleteclicked(false);
  }

  const handleLoad = async () => {
    try {
      const response = await axios.get(`${uri}Admin`, {});
      const productres = await axios.get(`${uri}Productget`, {});
      const customerres = await axios.get(`${uri}Customerget`, {});
      setProduct(productres.data);
      setCustomer(customerres.data);
      setTotalusers(response.data.totalusers);
      setTotalproducts(response.data.totalproducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    const sidebarLinks = document.querySelectorAll(".sidebar-list-item a");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", handleNavigation);
    });

    return () => {
      sidebarLinks.forEach(link => {
        link.removeEventListener("click", handleNavigation);
      });
    };
  }, []);

  useEffect(() => {

    document.body.style.overflow = "hidden";

    const sidebarLinks = document.querySelectorAll(".sidebar-list-item a");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", handleNavigation);
    });

    return () => {

      document.body.style.overflow = "auto";
      sidebarLinks.forEach(link => {
        link.removeEventListener("click", handleNavigation);
      });
    };
  }, []);


  const crossRef = React.createRef();
  const overlayRef = React.createRef();

  const handleButtonClick = () => {
    const overlayElement = overlayRef.current;
    const crossElement = crossRef.current;
    if (overlayElement.style.display !== "block") {
      overlayElement.style.display = "block";
      crossElement.style.display = "block";
    }
  };

  const handleCross = () => {
    const overlayElement = overlayRef.current;
    const crossElement = crossRef.current;
    if (overlayElement.style.display === "block") {
      overlayElement.style.display = "none";
      crossElement.style.display = "none";
    }
    setUpdateclicked(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };


  return (
    <StyleAdmin>
      <div className="container">
        <div className="sidebar">
          <div className="sidebartop">
            <NavLink to="/Home">
              <img src="/Resorces/fitpro_logo.png" alt="FitPro Logo" width="40px" />
              <span className="side-heading">EVOLVE365</span>
            </NavLink>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <a href="#dashboard">
                <BsGrid1X2Fill className="icon" /> Dashboard
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#red">
                <BsFillArchiveFill className="icon" /> Products
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#yellow">
                <BsPeopleFill className="icon" /> Customers
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#purple">
                <BsPeopleFill className="icon" /> Workout
              </a>
            </li>
            {/* <li className="sidebar-list-item">
              <a href="#green">
                <BsMenuButtonWideFill className="icon" /> Reports
              </a>
            </li> */}
          </ul>
        </div>
        <div className="display">
          <div className="dashboard" id="dashboard">
            <main className="main-container">
              <div className="main-title">
                <h3>DASHBOARD</h3>
              </div>
              <div className="main-cards">
                <div className="card">
                  <div className="card-inner">
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className="card_icon" />
                  </div>
                  <h1>{totalproducts}</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>SALES</h3>
                    <BsFillGrid3X3GapFill className="card_icon" />
                  </div>
                  <h1>0</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className="card_icon" />
                  </div>
                  <h1>{totalusers}</h1>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <h3>ENGAGEMENTS</h3>
                    <BsFillBellFill className="card_icon" />
                  </div>
                  <h1>42</h1>
                </div>
              </div>
            </main>
          </div>
          <div className="product_container" id="red">
            <div className="product_box">
              <button onClick={handleButtonClick} className="add-btn">Add Product</button><br /><br />
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td><img className="product_table_img" src={item.image} alt="" /></td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>


                      <td>
                        <button
                          style={{
                            width: '2.5vw',
                            height: '2.5vw',
                            backgroundColor: '#50C878',
                            border: 'none',
                            color: '#fff',
                            fontSize: '1.2rem'
                          }}
                          onClick={() => {
                            handleButtonClick();
                            setUpdateid(item.product_id);
                            setUpdateclicked(true);

                          }}
                        >
                          <FontAwesomeIcon icon={faCheck} className='awesomeicons' id='update' />
                        </button>
                      </td>

                      <td><button style={{ width: '2.5vw', height: '2.5vw', backgroundColor: 'red', border: 'none', color: '#fff', fontSize: '1.2rem' }} onClick={() => {
                        setDeleteclicked(true);
                        setDeleteid(item.product_id);
                      }}><FontAwesomeIcon icon={faXmark} className='awesomeicons' id='delete' /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="buttons">
                <button className="previous" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <button className="next" onClick={handleNextPage} disabled={indexOfLastItem >= product.length}>Next</button>
              </div>
            </div>
            {deleteclicked && (<div className="overlaydelete" id="overlaydelete">
              <h3 style={{ marginBottom: "1vh" }}>Are you Sure want to delete?</h3>
              <button onClick={() => handledelete()} style={{ marginRight: "10%", marginLeft: '15%', width: '20%' }} >Yes</button>
              <button onClick={() => handlecancel()} style={{ width: '20%' }}>Cancel</button>

            </div>)}

            <div className="overlaybox" ref={overlayRef}>
              <button className='crossicon' ref={crossRef} onClick={handleCross}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              {!updateclicked && (
                <>
                  <h3 style={{ textAlign: "center" }}>New Product</h3><br />
                </>
              )}
              {updateclicked && (
                <>
                  <h3 style={{ textAlign: "center" }}>Update Product</h3><br />

                </>
              )}
              <form>
                <input type="text" className="product-inputs" sname="product_name" placeholder="Enter Product Name" onChange={(e) => (setName(e.target.value))} /><br /><br />
                <input type="text" className="product-inputs" name="product_price" placeholder="Enter Price" onChange={(e) => (setPrice(e.target.value))} /><br /><br />
                <input type="text" className="product-inputs" name="product_category" placeholder="Enter Category" onChange={(e) => (setCategory(e.target.value))} /><br /><br />
                <textarea name="product_description" id="" cols="30" rows="10" placeholder="Description" onChange={(e) => (setDescription(e.target.value))} ></textarea><br /><br />
                <input type="text" className="product-inputs" name="product_link" placeholder="Affiliate link" onChange={(e) => (setLink(e.target.value))} /><br /><br />
                <input type="file" className="product-inputs" name="file" onChange={(e) => (setFile(e.target.files[0]))} /><br />
                {!updateclicked && (
                  <input type="submit" value="Add" className="submitbtn" onClick={handleSubmit} />
                )}

                {updateclicked && (
                  <input type="submit" value="Update" className="submitbtn" onClick={handleSubmit} />
                )}

              </form>
            </div>
          </div>
          <div className="customer_container" id="yellow">
            <div className="customer_box">
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Diet</th>
                    <th>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {customer.slice((currentPage - 1) * 7, currentPage * 7).map((item, index) => (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.age}</td>
                      <td>{item.diet}</td>
                      <td>{item.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="buttons">
                <button className="previous" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <button className="next" onClick={handleNextPage} disabled={(currentPage * 7) >= customer.length}>Next</button>
              </div>
            </div>
          </div>
          <div className="workout_container" id="purple">
            <Workout />

          </div>
          {/* <div className="reports_container" id="green">
            <h1 style={{ color: 'white', fontSize: '3rem' }}>COMING SOON</h1>

          </div> */}
        </div>
      </div>
    </StyleAdmin>
  );
};
const StyleAdmin = styled.div`
  
  .container {
    display: flex;
  }
  .sidebar {
    position:fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width:20%;
    height: 100vh;
    background-color: #263043;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  .sidebartop{
    width: 100%;
    height: 64px;
    background-color: #263043;
    padding: 4%;
    border: 1px solid #263043;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  .side-heading,a{
    font-size: 1.5rem;
    vertical-align: super;
    text-decoration: none;
    font-style:normal;
    color: #d04e17;
  }
  .sidebar-brand {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
  .sidebar-list {
    padding: 0;
    list-style-type: none;
  }

  .sidebar-list-item {
    padding: 20px 20px 20px 20px;
    font-size: 18px;
  }

  .sidebar-list-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  .sidebar-list-item > a {
    text-decoration: none;
    color: #9e9ea4;
  }

  .sidebar-responsive {
    display: inline !important;
    position: absolute;
    z-index: 12 !important;
  }
  .display{
    width: 80%;
    position: absolute;
    top: 0;
    margin-left: 20%;
    z-index: 1;
  }
.dashboard{
  background-color:#081938;
  width:100%;
  height: 100vh;
}
  .main-container {
    padding: 20px 20px;
    color: rgba(255, 255, 255, 0.95);
  }

  .main-title {
    display: flex;
    justify-content: space-between;
    color: white;
  }

  .main-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 15px 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 45px;
    border-radius: 5px;
  }

  .card:first-child {
    background-color: #2962ff;
  }

  .card:nth-child(2) {
    background-color: #ff6d00;
  }

  .card:nth-child(3) {
    background-color: #2e7d32;
  }

  .card:nth-child(4) {
    background-color: #d50000;
  }

  .card-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-inner > .card_icon {
    font-size: 25px;
  }
  .blue_container{
    width:100%;
  height:100vh;
  background-color:blue;
  }
  .product_container{
    width:100%;
  min-height:100vh;
  display: grid;
  place-items: center;
  }
  .customer_container{
    width:100%;
  min-height:100vh;
  display: grid;
  place-items: center;
  }
  .reports_container{
    width:100%;
  height:100vh;
  background-color:#081938;
  display: grid;
  place-items: center;

  }
  .product_box {
  min-height: 90vh;
  /* padding: 5vh 5vw 5vh 5vw; */
  display: block;
}
.customer_box {
  min-height: 90vh;
  /* padding: 5vh 5vw 5vh 5vw; */
  display: block;
  overflow-y: scroll;
}

.customer_box::-webkit-scrollbar {
  width: 0; 
}

.customer_box {
  scrollbar-width: none;
}
.overlaybox {
  background-color: white;
  display: none;
  width: 40%;
  height: 60vh;
  position: absolute;
  z-index: 1;
}
  table,tr,td,th{
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,td{
    font-size: 1rem;
    min-width: 8vw;
    max-width: 20vw;
    text-align: center;
    padding: 0.5%;
    
    
  }
  form{
    width: 100%;
    padding: 0 0% 0px 10%;
  }
.product-inputs{
  width: 90%;
  height: 5vh;
  padding-left: 1%;
}
textarea{
  width: 90%;
  height: 20vh;


}
.product_table_img{
  width: 80%;
  aspect-ratio: 2/3;
  object-fit: contain;
  
}
.submitbtn{
  display: block;
  margin: auto;
  width: 6vw;
  min-height: 4vh;
}
/* Product Container */
.product_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:#081938;

}

.product_box {
  width: 95%;
}

.add-btn {
  background-color: #D04E17;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.product_table_img {
  max-width: 100px;
  max-height: 100px;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

/* Buttons */
.buttons{
  margin-top: 16px;
  display:flex;
  justify-content: space-between;
}
.previous {
  background-color: #D04E17;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}
.next {
  background-color: #D04E17;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}


.previous:hover,
.next:hover, .add-btn:hover {
  background-color: #DD7B33;
 
}
/* Customer Container */
.customer_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #081938; 
  padding: 20px;

}

.customer_box {
  width: 95%;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 2px solid #263043;
  padding: 8px;
  text-align: center;
  color: #9e9ea4;
  font-size:large;
  font-weight:600;

}

th {
  background-color: #263043;
}

/* Buttons */
button.update-btn,
button.delete-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 5px;
}

button.update-btn:hover,
button.delete-btn:hover {
  background-color: #0056b3;
}
/* Add Product */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  justify-content: center;
  align-items: center;
  color: #9e9ea4;
}

.overlaybox {
  background-color: #263043;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  height:95vh;
}
h3{
  font-size: large;
}
.crossicon {
  position: absolute;
  top: 10px;
  right: 10px;
  background:none;
  font-size: 28px;
  border: none;
  cursor: pointer;
}

.product-inputs {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left:-5%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

}

textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left:-5%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.submitbtn {
  width: 100%;
  padding: 10px;
  margin-left:-5%;
  background-color:#D04E17; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.submitbtn:hover {
  background-color: #DD7B33; 
}
.workout_container{
  background-color:#081938;
}

.card_icon{
  margin-left: 2vh;
}

.overlaydelete{
  padding-left: 3%;
  padding-top: 3vh;
  width: 30%;
  height: 15vh;
  background-color: yellow;
  position: absolute;
  z-index: 2;
}
`

export default Admin_panel;