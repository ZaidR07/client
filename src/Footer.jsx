import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter className="footer_container">
      <NavLink to="/Home">
        <img src="/Resorces/fitpro_logo.png" alt="FitPro Logo" width="30px" id='logo' />
        <span id='logotxt'>EVOLVE365</span><br />
        

      </NavLink>
      <div className="footer_menu">
        <div className="footer_nav">
          <h2>Quick Menu</h2><br />
          <ul className="footer_navlist">
            <li>
              <NavLink to="/About">
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Workout">
                <span>Workout</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Diet">
                <span>Diet</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop">
                <span>Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="footer_text">
        <h2>Stay Tuned</h2><br/>
        <p style={{ fontSize: "25px", color: "#575757" }}>
          Subscribe Now and Get Access to{" "}
        </p>
        <p style={{ fontSize: "25px", color: "#575757" }}>
          Exclusive Workouts and Tips
        </p>{" "}
        <br />
        <div>
          <label  style={{fontSize:"20px"}} htmlFor="">Email*</label>
          <br />
          <br />
          <input name="from_email" className="contact-inputs" type="text" />
          <br />
          <br />
        </div>
        <div className="footer_btn">
          <input
            style={{
              width: "6rem",
              height: "3rem",
              backgroundColor: "#CC3D00",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            type="submit"
            value="join"
          />
          <br/>
        </div>
      </div> */}
      <div className="terms">
        <h2>Terms</h2><br />
        <div className="footer_nav">
          <ul className="footer_navlist">
            <li>
              <NavLink to="/Privacy">
                <span>Privacy Policy</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Terms">
                <span>Terms & Conditions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Copyright">
                <span>Copyright Policy </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_follow">
        <h2>Follow Me</h2><br />
        <div className="footer_nav">
          <ul className="footer_navlist">
            <li>
              <NavLink to="https://www.instagram.com/off_icialfitness365" target="blank">
                <span>Instagram</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.facebook.com/share/HrvYQDRas9w6yxvk/?mibextid=qi2Omg" target="blank">
                <span>Facebook</span>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </StyledFooter>

  );
};
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px; 
  
  a{
    color:#575757;
    list-style:none;
    text-decoration:none;
    font-size:25px;
    line-height:1.6;
  }
  
  .footer_navlist{
    text-decoration: none;
    list-style: none;
  }

  .companyinfo{
    width: 20%;
    color: black;
  }
  #logo{
    margin-left: -5vw;
    margin-top: -2vh
  }
  #logotxt{
    color: black;
    

  }

  #tagline{
    font-size: 12px;
    margin-left: -5vw;

  }

 
`;

export default Footer;
