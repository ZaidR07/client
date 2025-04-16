import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Header = ({ setIsLoggedIn, setAdminLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState();
  const [barclicked, setBarclicked] = useState(false);
  const [checklogin, setlogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUsername = localStorage.getItem('username');
      const isloggedIn = localStorage.getItem('isLoggedIn');
      const firstLetter = storedUsername.charAt(0).toUpperCase();
      setUsername(firstLetter);
      setlogin(!isloggedIn);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminLoggedIn(false);


    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');

    navigate('/');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const mobnavRef = useRef(null);

  const handlebarclicked = () => {
    const mobilenavElement = mobnavRef.current;

    if (barclicked) {
      mobilenavElement.style.cssText = `
        transform: translateX(0);
        transition: transform 0.8s ease-in-out;
        
      `;
    }
    else {
      mobilenavElement.style.cssText = `
        transform: translateX(100%);
        transition: transform 0.8s ease-in-out;
        
        
        


        


      `;

    }
  };

  return (
    <MainHeader>
      <section>
        <nav className='topmobnav'>
          <NavLink to="/Home">
            <img src="/Resorces/fitpro_logo.png" alt="FitPro Logo" width="20px" id='logo' />
            <span id='logotxt'>EVOLVE365</span>
          </NavLink>
          <FontAwesomeIcon
            icon={faBars}
            className='awesomeicons'
            id='bars'
            onClick={() => {
              setBarclicked(!barclicked);
              handlebarclicked();
            }}
          />
        </nav>

        <nav className='navbar' ref={mobnavRef}>
          <div className="nav1">
            <NavLink to="/Home">
              <img src="/Resorces/fitpro_logo.png" alt="FitPro Logo" width="20px" id='logo' />
              <span>EVOLVE365</span>
            </NavLink>
          </div>
          <div className="nav2">
            <ul className='navlist'>
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
          <div className="nav3">
            <FontAwesomeIcon icon={faBell} className='awesomeicons' id='bell' />
            <span className="coming-soon-text">Coming Soon</span>
            <div style={{ borderRadius: '100%', width: '30px', height: '30px', backgroundColor: '#CC3D00', marginLeft: '1vw' }} className="profile">
              <h4>{username}</h4>
            </div>
            <div className="dropdown-container">
              <button className="dropdown-button" onClick={handleToggle}>
                <FontAwesomeIcon icon={faAngleDown} className='awesomeicons' />
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  <NavLink to='/Profile'>
                    <p>Profile</p>
                  </NavLink>
                  <p onClick={handleLogout}>Log out</p>
                  {checklogin &&
                    <NavLink to='/Admin_panel'>
                      <p>Admin Panel</p>
                    </NavLink>
                  }


                </div>
              )}
            </div>
          </div>
        </nav>
      </section>
    </MainHeader>
  );
};
const MainHeader = styled.header`

  .navbar{
    height: var(--navbarheight);
    display: flex;
    font-family: 'Times New Roman', Times, serif;
    background-image: url(../Resorces/nav_img2.jpg);
    
  
  }
  .nav1{
  
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 12%;
    margin-left: 3%;
    height: var(--multinavheight);
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 0px 0px 20px 20px;
    z-index: 1;
    


  }
  .nav2{
    /* background-color: ${({ theme }) => theme.colors.navbg}; */
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter:(15px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 50%;
    margin-left: 20%;
    height: var(--multinavheight);
    display: flex;
    align-items: center;
    border-radius: 0px 0px 20px 20px;
    z-index: 1;

    
    
    


  }
  .nav3{
    /* background-color: ${({ theme }) => theme.colors.navbg}; */
    height: var(--multinavheight); 
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width:10% ;
    margin-left: 3%;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    border-radius: 0px 0px 20px 20px;
    z-index: 1;
    padding: 5px;
  


  }
  .navlist{
    width: 100%;
    height: var(--multinavheight);
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
    justify-content: space-around;
    
  }
  .nav2 a:hover{
    color: #E49472;
  }

  a{
    text-decoration: none;
    list-style: none;
    color: white;
    font-family: 'Times New Roman', Times, serif;


  }

  .awesomeicons {
    font-size: 1.3rem;
    color: #E49472;

  }

  .coming-soon-text{
    color: #CC3D00;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 6.5vh;
    left: -3vw;

  }

  #bell:hover + .coming-soon-text {
  visibility: visible;
  opacity: 1;
}



  
  /* Dropdown.css */
.dropdown-container {
  position: relative;
  display: inline-block;
  
  


}

.dropdown-button {
  /* background-color: #242426; */
  background: rgba( 255, 255, 255, 0 );
  width: 40px;
  height: 30px;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: block;
  position: absolute;
  top: 5vh;
  right: -2vw;
  background-color: #48494C;
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: white;
  width: 8vw;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content p {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content p:hover {
  background-color: #E49472;
}

.profile{
  display: grid;
  place-items: center;
  color: white;
}
.topmobnav{
  display: none;
}



// Responsiveness for mobile
@media screen and (max-width: 480px) {
  .navbar{
    height: 100vh;
    background-color:#CC3D00 ;
    background-image: none;
    position:fixed ;
    top: var(--navbarheight);
    right: 0;
    width: 50%;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
    z-index: 99;
    transform: translateX(100%);
    



  }

  #bars{
  font-size: 2rem ;
  color: #fff;
  position: fixed;
  z-index: 99;
  right: 4%;
  

}

  .topmobnav{
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--navbarheight);
    background-color: #15191F;
    padding: 2%;
    position: fixed;
  }

.nav1{
  display: none;
}
.nav2{
  width: 60%;
  height: 40vh;
  border-radius: 4%;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  border: 1px solid #fff;
  background-color:#CC3D00 ;
  margin-bottom: 10vh;




  


  
}
.nav3{
  width: 60%;
  height: 10vh;
  border-radius: 5%;
  margin: 0;
  padding: 0;
  border: 1px solid #fff;
  background-color:#CC3D00 ;


}
.nav2>ul{
  height: 90%;
  display: flex;
  flex-direction: column;
 
}
.profile{
  background-color: #fff !important;
  color: #CC3D00;
}

#logo{
  width: 30px;
}
#logotxt{
  font-size: 1.5rem;
}

}


`

export default Header;
