import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { uri } from "./constant";


const Profile = () => {

    const [customer, setCustomer] = useState([]);
    const [username, setUsername] = useState();
    const [purename, setPurename] = useState();
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [waist, setWaist] = useState("");
    const [diet, setDiet] = useState("");
    const [experience, setExperience] = useState("");
    const [activity, setActivity] = useState("");


    const handleLoad = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            const customerres = await axios.post(`${uri}profileget`, {
                email: userEmail,
            });
            setCustomer(customerres.data);

            const storedUsername = localStorage.getItem('username');
            const firstLetter = storedUsername.charAt(0).toUpperCase();
            setUsername(firstLetter);
            setPurename(storedUsername);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleLoad();
    }, []);

    const notify = (username) => toast("Profile Updated Successfully", {
        style: {},
        progressClassName: 'custom-toast-progress'
    });

    const handleUpdate = () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            axios.post(`${uri}profileupdate`, {
            email: userEmail,
            age: age,
            height: height,
            weight: weight,
            waist: waist,
            diet: diet,
            experience: experience,
            activity: activity,
        }).then(response => {
            if(response.data.status){
                notify();
                handleLoad();
            }
        }).catch(error => {
            console.log(error);
        });
        }
        catch (error) {
            console.log(error);
        }

    }



    return (
        <Styledprofile>
            <section className='profilesection'>
                <div className="profilebox">
                    <div className="profileicon">
                        <h1 style={{ fontSize: "3.5rem" }}>{username}</h1>
                    </div>
                    {customer.length > 0 && (
                        <div className="profileboxinfo">
                            <h3>{purename}</h3>
                            <p>{customer[0].email}</p>
                        </div>
                    )}

                </div>
                {customer.length > 0 && (
                    <div className="infobox">
                        <div className="box1">
                            <span>Gender: {customer[0].gender}</span>
                        </div>
                        <div className="box1">
                            <span>Age: {customer[0].age}</span>
                        </div>
                        <div className="box1">
                            <span>Height: {customer[0].height}</span>
                        </div>
                        <div className="box1">
                            <span>Weight: {customer[0].weight}</span>
                        </div>
                        <div className="box1">
                            <span>Waist: {customer[0].waist}</span>
                        </div>
                        <div className="box1">
                            <span>Diet: {customer[0].diet}</span>
                        </div>
                        <div className="box1">
                            <span>Activity: {customer[0].activity}</span>
                        </div>
                        <div className="box1">
                            <span>Experience: {customer[0].experience}</span>
                        </div>
                    </div>
                )}
            </section>
            <section className='updatesection'>
                <section className="top">
                    <h2>Update Profile</h2>
                </section>
                <div className="form">
                    <div className="personalinfo">
                        <div className="input-box">
                            <div className="label">
                                <label htmlFor="age">Age : </label>
                            </div>
                            <input
                                className="input-fields"
                                type="text"
                                name="age"
                                id=""
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <div className="label">
                                <label htmlFor="height">Height : </label>
                            </div>
                            <input
                                className="input-fields"
                                type="text"
                                name="height"
                                placeholder="In feets"
                                id=""
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <div className="label">
                                <label htmlFor="weight">Weight : </label>
                            </div>
                            <input
                                className="input-fields"
                                type="text"
                                name="Weight"
                                placeholder="In kilograms"
                                id=""
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <div className="label">
                                <label htmlFor="weight">Waist : </label>
                            </div>
                            <input
                                className="input-fields"
                                type="text"
                                name="Waist"
                                placeholder="Waist in inches"
                                id=""
                                onChange={(e) => setWaist(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="diet">
                        <div className="input-box">
                            <div className="label">
                                <label htmlFor="Diet">Diet : </label>
                            </div>
                            <p style={{ display: 'inline-block', marginRight: '2%' }}>Vegetarian</p>
                            <input
                                className="input-fields"
                                type="radio"
                                name="Diet"
                                id=""
                                value="Non-vegetarian"
                                onChange={(e) => setDiet(e.target.value)}
                            />
                            <p style={{ display: 'inline-block', marginRight: '2%' }}>Non-Vegetarian</p>
                            <input
                                className="input-fields"
                                type="radio"
                                name="Diet"
                                id=""
                                value="Vegetarian"
                                onChange={(e) => setDiet(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="Activeness">
                        <div className="input-box">
                            <div className="label">
                                <label htmlFor="Experience">Activeness :
                                </label>
                            </div>
                            <p style={{ display: 'inline-block', marginRight: '2%' }}>Sedentary</p>
                            <input
                                className="input-fields"
                                type="radio"
                                name="Activeness"
                                id=""
                                value="Sedentary"
                                onChange={(e) => setActivity(e.target.value)}
                            />
                            <p style={{ display: 'inline-block', marginRight: '2%' }}>Light-Activity</p>
                            <input
                                className="input-fields"
                                type="radio"
                                name="Activeness"
                                id=""
                                value="Light-Activity"
                                onChange={(e) => setActivity(e.target.value)}
                            />
                            <p style={{ display: 'inline-block', marginRight: '2%' }}>Moderately-Active</p>
                            <input
                                className="input-fields"
                                type="radio"
                                name="Activeness"
                                id=""
                                value="Moderately-Active"
                                onChange={(e) => setActivity(e.target.value)}
                            />
                            <p style={{ display: 'inline-block', marginRight: '2%' }}>Highly-active</p>
                            <input
                                className="input-fields"
                                type="radio"
                                name="Activeness"
                                id=""
                                s
                                value="Highly-Active"
                                onChange={(e) => setActivity(e.target.value)}
                            />
                        </div>
                        <div className="level">
                            <div className="input-box">
                                <div className="label">
                                    <label htmlFor="Experience">Experience :   </label>
                                </div>
                                <p style={{ display: 'inline-block', marginRight: '2%' }}>Beginner</p>
                                <input
                                    className="input-fields"
                                    type="radio"
                                    name="Experience"
                                    id=""
                                    value="Beginner"
                                    onChange={(e) => setExperience(e.target.value)}
                                />
                                <p style={{ display: 'inline-block', marginRight: '2%' }}>Intermediate</p>
                                <input
                                    className="input-fields"
                                    type="radio"
                                    name="Experience"
                                    id=""
                                    value="Intermediate"
                                    onChange={(e) => setExperience(e.target.value)}
                                />
                                <p style={{ display: 'inline-block', marginRight: '2%' }}>Advanced</p>
                                <input
                                    className="input-fields"
                                    type="radio"
                                    name="Experience"
                                    id=""
                                    value="Advanced"
                                    onChange={(e) => setExperience(e.target.value)}
                                />
                            </div>
                        </div>



                        <input
                            type="button"
                            value="Submit"
                            onClick={() => handleUpdate()}
                        />
                    </div>
                </div>

            </section>

        </Styledprofile>
    )
}

const Styledprofile = styled.div`

    width: 100%;
    min-height: 110vh;
    background-color: #f7f8fa;
    display: flex;
    justify-content: center;


    .profilesection{
        width: 24%;
        height: 60vh;
        background-color: whitesmoke;
        margin-right: 2%;
        /* margin-top:20vh; */
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);


    }

    .updatesection{
        width: 58%;
        height: 70vh;
        margin-top: 15vh;
        /* background-color: orange; */

    }

    .profilebox{
        width: 100%;
        height: 40vh;
        background-color: #CC3D00;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .profileboxinfo{
        text-align: center;
        color: #fff;
    }

    .profileicon{
        width: 20vh;
        height: 20vh;
        background-color: #263043;
        border-radius: 100%;
        margin-bottom: 4vh;
        display: grid;
        place-items: center;
        color: white;
    }

    .infobox{
        display: flex;
        flex-wrap: wrap;
        padding: 1vh 0 0 0;
    }

    .box1{
        width: 50%;
        height: 5vh;
        /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1); */
        padding: 0.8%;
        /* border-bottom: 0.2px solid black; */
        font-size: 0.6rem;
    }
    .box {
    width: 100%;
    height: 90vh;
    padding: 2%;
    border: 1px;
    box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
    border-radius: 2%;
    margin-top:5px;
    background-color: white;
  }
  .top{
    background-color: #CC3D00;
    color: white;
    display: grid;
    place-items: center;
    height: 8vh;
    margin-bottom: 2vh;
    
  }
  .form {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px;
  }
  .personalinfo {
    display: flex;
    flex-wrap: wrap;   
  }
  .Activeness,
  .level {
    justify-content: space-between;
  }
  .input-box {
    width: 100%;
    height: 6vh;
    padding: 1vh 0 0 1%;
    flex-direction: column;
    margin-bottom: 4vh;
    display: inline-block;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align:left;
  }
  input[type="checkbox"] {
    margin-right: 5px;
    margin-bottom: 5px;
  }
  input[type="button"] {
    padding: 10px 20px;
    background-color: #d04e17;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  .input-fields{
    padding-left: 1%;
  }
  input[type="button"]:hover {
    background-color:#E8751A;
  }
  .label{
    min-width: 15%;

    display: inline-block;
  }
  .input-box input[type="radio"] {
  margin-right: 10px; 
}
    

`

export default Profile