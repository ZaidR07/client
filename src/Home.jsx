import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { uri } from './constant';




const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0nzze42', 'template_lzopm8m', form.current, 'CJz4NTaWUvb2i_p6M')
      .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
      }, (error) => {
        alert(error.text);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${uri}Productget`);
        const filteredsale = response.data.filter(
          (product) => product.category === "Sale"
        );
        setSales(filteredsale);

      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <StyledHome>
      <div className="hero">
        <div className="headline">
          <h1>ELEVATE YOUR JOURNEY.</h1>
          <h1>CHALLENGES SHAPE SUCCESS!</h1><br />
          <button className='headline-btn' onClick={() => navigate('/Workout')}>Get Started</button>

        </div>
        <div className="ad">
          <h1>Top Pick's for you</h1><br />
          <div className="cards">
            <div className="card">
              <img className='saleimges' src="./Resorces/Sale_strip1.png" alt="" />
              <a target='blank' href="https://fktr.in/hfExLMn"><img src="./Resorces/Reebok.jpeg" alt="" style={{ marginTop: '-26vh', width: '100%' }} /></a>

            </div>
            <div className="card">
              <img className='saleimges' src="./Resorces/Sale_strip1.png" alt="" />
              <a target='blank' href="https://fktr.in/evmXxrt"><img src="./Resorces/Puma.jpeg" alt="" style={{ marginTop: '-26vh', width: '100%', height: '51vh' }} /></a>
            </div>
            <div className="card">
              <img className='saleimges' src="./Resorces/Sale_strip1.png" alt="" />
              <a target='blank' href="https://fktr.in/QBzKVh6"><img src="./Resorces/Asics.jpeg" alt="" style={{ marginTop: '-26vh', width: '100%', height: '51vh' }} /></a>
            </div>
          </div>
        </div>

      </div>
      <div className="blog">
        <div className="left">
          <img className='blogimg' src="..//Resorces/blogimg2.webp" alt="" />
        </div>
        <div className="right">
          <div className="text">
            <h2 style={{ fontSize: '1.2rem', lineHeight: '0px' }}>~Our Story</h2>
            <br />
            <p style={{ color: '#575757', textAlign: 'justify' }}>Born from a desire to empower individuals to lead healthier lives, our platform began as a vision to revolutionize the way people approach fitness. With a team of dedicated experts, we've crafted an immersive experience tailored to your needs, helping you unleash your full potential and embrace a lifestyle of vitality and strength.</p><br />
            <NavLink to="/About#about_container">
              <button className='readmorebtn'>Read More</button><br />
            </NavLink>


          </div>

        </div>
      </div>
      <div className="motivationwall">
        <h1 className='motivation_main_heading'>BENEFITS OF WORKING OUT</h1><br /><br /><br /><br />



        <div className="motivation_box">
          <div className="motivationicon">
            <svg id='motivationicon' preserveAspectRatio="xMidYMid meet" data-bbox="39.022 20.084 121.954 159.831" viewBox="39.022 20.084 121.954 159.831" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="" style={{ width: "60px", height: "60px" }}>
              <g>
                <path d="M156.804 39.022c-21.687 0-33.939-.799-54.102-17.941a4.16 4.16 0 0 0-5.404 0C77.135 38.223 64.883 39.022 43.196 39.022a4.172 4.172 0 0 0-4.174 4.174V116c0 27.308 16.69 37.493 44.34 54.371 4.475 2.727 9.28 5.661 14.408 8.901a4.185 4.185 0 0 0 4.458 0c5.127-3.24 9.933-6.175 14.408-8.901 27.65-16.878 44.34-27.063 44.34-54.371V43.195a4.169 4.169 0 0 0-4.172-4.173zM152.63 116c0 22.62-13.483 30.849-40.342 47.242-3.852 2.352-7.952 4.854-12.288 7.569-4.337-2.714-8.437-5.217-12.288-7.569C60.852 146.85 47.37 138.621 47.37 116V47.352c19.739-.159 33.156-1.924 52.63-17.668 19.474 15.745 32.891 17.509 52.63 17.668V116z" fill="#D64000" data-color="1"></path>
                <path d="M98.829 64.029a3.834 3.834 0 0 0-5.423 5.423l14.547 14.547-21.424 21.424-14.547-14.547a3.836 3.836 0 0 0-5.423 5.423l34.518 34.518a3.836 3.836 0 0 0 5.423-5.423l-14.547-14.547 21.424-21.424 14.547 14.547a3.834 3.834 0 0 0 5.423-5.423L98.829 64.029z" fill="#D64000" data-color="1"></path>
                <path d="M71.982 121.559a3.834 3.834 0 0 0-5.423 5.423l3.835 3.835a3.836 3.836 0 0 0 5.423-5.423l-3.835-3.835z" fill="#D64000" data-color="1"></path>
                <path d="M71.982 106.218a3.834 3.834 0 0 0-5.423 5.423l19.176 19.177.095.094a3.836 3.836 0 0 0 5.329-5.517l-19.177-19.177z" fill="#D64000" data-color="1"></path>
                <path d="M127.923 73.288l.094.094a3.836 3.836 0 0 0 5.329-5.517l-3.835-3.835a3.834 3.834 0 1 0-5.423 5.423l3.835 3.835z" fill="#D64000" data-color="1"></path>
                <path d="M127.923 88.629l.094.094a3.836 3.836 0 0 0 5.329-5.517L114.17 64.029a3.834 3.834 0 1 0-5.424 5.423l19.177 19.177z" fill="#D64000" data-color="1"></path>
              </g>
            </svg>
          </div><br />
          <div className="motivationheading">
            <h1><span className='motivation_color_heading'>Build</span> Confidence</h1>
          </div><br />
          <div className="motivation_text">
            <p>Workouts can boost confidence by improving physical strength and appearance, leading to a greater sense of self-assurance and empowerment.</p>
          </div><br /><br />

          <div className="partition_line">

          </div>
        </div>

        <div className="motivation_box">
          <div className="motivationicon">
            <svg id='motivationicon' preserveAspectRatio="xMidYMid meet" data-bbox="39.022 20.084 121.954 159.831" viewBox="39.022 20.084 121.954 159.831" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="" style={{ width: "60px", height: "60px" }}>
              <g>
                <path
                  d="M100 38.69c-33.806 0-61.31 27.503-61.31 61.31s27.504 61.31 61.31 61.31 61.31-27.504 61.31-61.311S133.807 38.69 100 38.69zm0 113.62c-28.844 0-52.311-23.467-52.311-52.311S71.156 47.69 100 47.69s52.31 23.466 52.31 52.31-23.466 52.31-52.31 52.31z"
                  fill="#D64000"
                  data-color="1"
                ></path>
                <path
                  d="M120.649 115.063c-5.521 5.521-12.854 8.562-20.648 8.562-7.795 0-15.128-3.041-20.649-8.562a4.5 4.5 0 0 0-6.364 6.364c7.221 7.221 16.814 11.197 27.013 11.197 10.199 0 19.792-3.977 27.013-11.197a4.5 4.5 0 0 0-6.365-6.364z"
                  fill="#D64000"
                  data-color="1"
                ></path>
                <path
                  d="M76.482 88.301c0-2.165 1.761-3.925 3.925-3.925s3.926 1.761 3.926 3.925a4.5 4.5 0 0 0 9 0c0-7.127-5.798-12.925-12.926-12.925-7.127 0-12.925 5.798-12.925 12.925a4.5 4.5 0 0 0 9 0z"
                  fill="#D64000"
                  data-color="1"
                ></path>
                <path
                  d="M119.593 75.375c-7.127 0-12.926 5.798-12.926 12.925a4.5 4.5 0 0 0 9 0c0-2.165 1.761-3.925 3.926-3.925s3.925 1.761 3.925 3.925a4.5 4.5 0 0 0 9 0c0-7.126-5.798-12.925-12.925-12.925z"
                  fill="#D64000"
                  data-color="1"
                ></path>
              </g>
            </svg>
          </div><br />
          <div className="motivationheading">
            <h1><span className='motivation_color_heading'>Boost Your</span> Mood</h1>
          </div><br />
          <div className="motivation_text">
            <p>
              Exercise has a remarkable ability to enhance mood by releasing endorphins, the body's natural mood lifters, promoting feelings of happiness and well-being.</p><br /><br />
          </div>
          <div className="partition_line">

          </div>
        </div>
        <div className="motivation_box">
          <div className="motivationicon">
            <svg id='motivationicon' preserveAspectRatio="xMidYMid meet" data-bbox="39.022 20.084 121.954 159.831" viewBox="39.022 20.084 121.954 159.831" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="" style={{ width: "60px", height: "60px" }}>
              <g>
                <path d="M147.568 82.029a4.5 4.5 0 0 0-3.978-2.396h-31.91l17.135-58.28a4.5 4.5 0 0 0-7.948-3.928l-68.089 93.008a4.5 4.5 0 0 0 3.631 7.158h35.323l-17.676 61.073a4.5 4.5 0 0 0 8.042 3.783l65.212-95.783a4.493 4.493 0 0 0 .258-4.635zm-57.015 72.01l11.488-39.696a4.498 4.498 0 0 0-4.323-5.751H65.28l47.637-65.07-11.567 39.341a4.5 4.5 0 0 0 4.318 5.77h29.416l-44.531 65.406z" fill="#D64000" data-color="1"></path>

              </g>
            </svg>
          </div><br />
          <div className="motivationheading">
            <h1 style={{ display: 'inline-block' }}><span className='motivation_color_heading'>Increase</span> Energy</h1>
            <h1 style={{ display: 'inline-block', whiteSpace: 'pre' }} className='motivation_color_heading'> Levels</h1>
          </div><br />
          <div className="motivation_text">
            <p>
              Regular exercise can increase energy levels by improving cardiovascular health, enhancing circulation, and boosting metabolism, resulting in more sustained energy throughout the day.</p><br /><br />
          </div>
          <div className="partition_line">

          </div>
        </div>
      </div>
      <div className="gallery">
        <h1 className='gallery_heading'>FOLLOW @EVOLVE365</h1><br /><br />
        <NavLink to = "https://www.instagram.com/off_icialfitness365" target='blank'>
          <div className="gallery_item">
            <div className="item portrait"><img className='portrait' src="../Resorces/gallery_img1.webp" alt="img1" /></div>
            <div className="item landscape"><img className='landscape' src="../Resorces/gallery_img3.webp" alt="img2" /></div>
            <div className="item landscape"><img className='landscape' src="../Resorces/gallery_img11.webp" alt="img3" /></div>
            <div className="item portrait"><img className='portrait' src="../Resorces/gallery_img7.webp" alt="img4" /></div>
            <div className="item portrait"><img className='portrait' src="../Resorces/gallery_img5.webp" alt="img5" /></div>
            <div className="item landscape"><img className='landscape' src="../Resorces/gallery_img9.webp" alt="img6" /></div>
            <div className="item landscape"><img className='landscape' src="../Resorces/gallery_img10.webp" alt="img7" /></div>
            <div className="item landscape"><img className='landscape' src="../Resorces/gallery_img12.webp" alt="8" /></div>
            <div className="item landscape"><img className='landscape' src="../Resorces/gallery_img13.webp" alt="img9" /></div>









          </div>
        </NavLink>
      </div>
      <div className="contact-container">
        <div className="contactleft">
          <h1 className="Contact-heading">GET IN TOUCH</h1>
          <br />
          <br />
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className='contact-fields '>
              <label htmlFor="first_name">First Name*</label>
              <br />
              <br />
              <input name="first_name" id="first_name" className="contact-inputs" type="text" required />
              <br />
              <br />
            </div>
            <div className='contact-fields lastname'>
              <label htmlFor="last_name">Last Name</label>
              <br />
              <br />
              <input name="last_name" id="last_name" className="contact-inputs" type="text" />
              <br />
              <br />
            </div>
            <div className='contact-fields'>
              <label htmlFor="from_email">Email*</label>
              <br />
              <br />
              <input name="from_email" id="from_email" className="contact-inputs" type="email" required />
              <br />
              <br />
            </div>
            <div className='contact-fields subject'>
              <label htmlFor="from_subject">Subject</label>
              <br />
              <br />
              <input name="from_subject" id="from_subject" className="contact-inputs" type="text" />
            </div>
            <div className='contact-fields message'>
              <label htmlFor="message">Message</label>
              <br />
              <br />
              <textarea name="message" id="message"></textarea>
              <br />
              <br />
            </div>
            <br />
            <input
              className="contact_btn"
              style={{ width: '30%', height: '8vh', backgroundColor: '#CC3D00', border: '0px', color: '#fff' }}
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <div className="contactright">
          <img className="contact_img" src="/Resorces/contactimg.webp" alt="" />
        </div>
      </div>





    </StyledHome>

  )
}

const StyledHome = styled.div`
.hero{
  background-image: url(".//Resorces/landing1.jpg");
  background-size: 120%;
  background-repeat: no-repeat;
  min-height: 170vh;
  width: 100%;
/* margin-top: -64px; */
}

.headline{
  position: absolute;
  top: 30vh;
  left: 4vw;
  color: #242426;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5; 
  letter-spacing: 5px;


}
.headline-btn{
  width: 15vw;
  height: 8vh;
  border: 1px solid #242426;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0); 
  color: #242426;
  font-size: 1.3rem;
 
}
.headline-btn:hover{
  background-color: rgba(255, 255, 255, 0.2); 
  
}

.ad{
  width: 80%;
  height: 80vh;
  position: absolute;
  top: 85vh;
  left: 4vw;
  opacity: 70%;
  font-size: 1rem;

}
.cards{
  display: flex;
  justify-content: space-around;
}
.card{
  position: relative;
  width: 25%;
  height: 50vh;
  background-color: #494A4D;
  overflow: hidden; 

}
.blog{
  width: 100%;
  display: flex;
  overflow-y: hidden;
  height: 140vh;

}
.left{
  width: 60%;
  height: 140vh;
  background-color:red;
}
.right{
  width: 40%;
  height: 140vh;
  display: grid;
  place-items: center;

}
.text{
  width: 80%;
  font-size:1.8rem;
}
.blogimg{
  width: 100%;

}
.readmorebtn{
  width: 35%;
  height: 10vh;
  background-color : #CC3D00;
  border: none;
  color: white;
  border-radius: 6px;
  font-size: 1rem;
}
.motivationwall{
  width: 100%;
  padding-top: 30vh;
  
}
.motivation_main_heading{
  margin-left: 10%;
  font-size: 2.5rem;
  font-family: Arial, Helvetica, sans-serif;
  
}
.motivation_box{
  width: 80%;
  margin: auto;
  margin-bottom: 10vh;
}
.motivationheading{
  color: #CC3D00 ;
  font-size: 1rem;
}
.motivation_color_heading{
  color:#575757 ;
}
.motivation_text{
  color:#575757 ;
  font-size: 1rem;
  white-space: pre-line;

}
.partition_line{
  margin: auto;
  width: 80%;
  height: 0.2rem;
  background-color: #CC3D00;
}
.gallery_heading{
  font-size: 2.5rem;
  margin-left: 10%;
  font-family: cursive;
}
.gallery_item{
  width: 100%;
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 25%); 
  grid-template-rows: repeat(3, 33.3vh);
 
}

.item.portrait{
  grid-row: span 2;  
  
}
.landscape{
  width: 100%;
  height: auto;
  max-height: 33.3vh;

}
.portrait{
  width: 100%;
  height: auto;
  max-height: 66.6vh;

}

.saleimges{
  width: 96%;
  height: 25vh;
  bottom: 0;
  right: 0;
  /* transform-origin: left;  */
  transform: rotate(-45deg);
  margin-left: -19%;
  z-index: 1;
}


@media screen and (max-width: 480px) {

  .hero{
  background-image: url(".//Resorces/mob_landing2.jpg");
  background-size:135%;
  background-repeat: no-repeat;
  min-height:61.5vh;
  width: 100%;

}

.headline{
  top: 20vh !important;
  left: 4vw;
  color: #242426;
  font-size: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5; 
  letter-spacing: 5px;
  left: 4%;


}

.headline-btn{
  
    width: 20vw;
    height: 2.5vh;
    border: 1px solid #242426;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0);
    color: #242426;
    font-size: 0.8rem;
    margin-top: 2vh;
}


.ad{
    top: 42vh;
    opacity: 80%;
    font-size: 0.5rem;
    height: 17.5vh;
}

.cards{
  width: 100%;
}

.card{
  height: 12vh;
}

.saleimges{
  z-index: 1;
}


.blog{
  height: 35vh;

}
.blogimg{
  height: 35vh;

}
.right{
  height: 35vh;
}


.left{
  height: 35vh;

}


.text{
  font-size: 0.8rem !important;
  text-align: justify;
  margin-top: 5vh;
}

.readmorebtn{
  width: 50%;
  height: 2.5vh;
  font-size: 0.6rem;

}

.motivationwall{
  padding-top: 5vh;
}

.motivation_main_heading{
  font-size: 1.2rem;
}

.motivation_box{
  margin-top: -5vh;
}

#motivationicon{
  width: 30px!important;
  height: 30px!important;
}


}


`;












export default Home;

