import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <div className="about_container" id="about_container">
        <div className="about_heading">
          <h1>
            this is how <br />We made it!!
          </h1>
          <div className="about_text">
            <p>
            "Transforming Lives, One Rep at a Time."
            </p>
          </div>
        </div>

      </div>
      <div className="about_container2">
        <div className="about_img">
          <img
            src="https://static.wixstatic.com/media/c837a6_39934f7b85da43f3bffae040ba2aef11~mv2.jpg/v1/crop/x_0,y_366,w_6392,h_5367/fill/w_597,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1140544253.jpg"
            alt="Description of the image"
            width="362"
            height="303"
            style={{ width: "362px", height: "303px", objectFit: "cover" }}
          />
        </div>
        <div className="about_text2">
          <p className="about_paragraph" style={{textAlign:'justify' , paddingRight:'5vw'}}>
            Fitness365 is your go-to destination for personalized diet and workout plans, expert guidance, and motivation. Our user-friendly platform aims to empower individuals of all fitness levels to cultivate long-lasting habits and lead healthier lives. Join us on your journey to a healthier, happier you, 365 days a year!
            <br />
            <br />
            {/* <input
              style={{
                width: "10rem",
                height: "3rem",
                backgroundColor: "#CC3D00",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              type="submit"
              value="Join My Programs "
            /> */}
          </p>
        </div>
      </div>
      <div className="about_txt3">

        <h1 className="about_paragraph2">
          “WE ARE WHAT WE REPEATEDLY DO. EXCELLENCE <br />
          THEN IS NOT AN ACT BUT A HABIT.”
        </h1>
      </div>
      <div className="about_txt4"  style={{paddingLeft:'5vw' , marginTop:'5vh', minHeight:'25vh'}}>
        <h2>Team Info</h2><br />
        <p>
        Meet the dynamic duo behind Fitness365: Zaid Rahman and Kajal Maurya. With their combined expertise in development and management, they are the driving force behind the success of our project. Dedicated to delivering excellence, they ensure that Fitness365 remains at the forefront of innovation, empowering individuals to achieve their fitness goals effortlessly.
        </p>
      </div>
    </StyledAbout>
  );
};
const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .about_container {
    background-image:url(../Resorces/aboutimgmain.webp);
    width: 100%;
    height:100vh;
    overflow-x:hidden;
    background-size: cover;
    background-position: center;
  }
  .about_heading {
    margin-top: 15%;
    place-items: right;
    text-transform: uppercase;
    color: white;
    font-size: 30px;
     margin-left: 40px; 
    
  }
  .about_text {
    color: white;
    font-size: 26px;
    line-height: 1.5;
    text-transform: lowercase;
  }
  
  .about_container2 {
    display: flex;
    margin-top: 10%;
    margin-left: 19%; 
  }
  .about_paragraph {
     margin-left: 80px; 
    line-height: 1.4;
    font-size: 25px;
    color: #575757;
  }
  .about_txt3 {
    margin-top: 80px;
    width: 100%;
    height: 70vh;
    background-color: #d04e17;
    display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  }
  .about_paragraph2 { 
    color: white;
    font-size: 40px;
    /* font-family: Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif; */
    
  }
  .about_txt4 {
    margin-top: 80px;
    color: #575757;
    font-size: 20px;
    height: 20vh;
    border-block-end: 1px solid #575757;
  }
  @media only screen and (max-width: 600px) {
  .about_container {
    background-image:url(../Resorces/aboutimg.webp);
    /* height:auto; */
    width:100%;
    text-align: center;
    /* background-size:contain;  */
    background-position: top; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    ${'' /* background-repeat:no-repeat; */}
    ${'' /* overflow-x:hidden; */}
  }

  .about_heading h1 {
    margin-top:90%;
    font-size: 1.5em;
    margin-left:-20%;
    color: black;
  }
  .about_text{
    font-size:0.9em;
    color: #000;
  }
.about_container2{
  flex-direction: column-reverse;
    align-items: center;
}
  .about_text p,
  .about_text2 .about_paragraph {
    font-size: 1.0em; 
    text-align: left;
    margin-bottom: 20px;
    margin-left:12%;
  }
  .about_img img {
    width: 100%; 
    height: auto; 
    object-fit: cover; 
    margin-left:-22%;
  }
  .about_text2 input {
    margin-top:20%;
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
  .about_text2{
    margin-top: 10%;
    margin-left:-45%;
  }
  .about_paragraph2 {
    font-size: 1.9em;
    
  }
  .about_txt3{
   padding:80px;
   text-indent:0em;
  }
  
  .about_txt4 p {
    font-size: .8em;
    padding:5%;
   margin-left:2%;
   font-weight: 400;
  }
}
`;
export default About;