import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  
  

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }

    :root {
        --navbarheight: 64px;
        --multinavheight: 40px;
    }

    .custom-toast-progress {
    background-color: blue;
}

  

  /* CONTACT PAGE CSS */
  Wrapper {
  font-family: 'Arial', sans-serif;
}
.contact-container {
  width: 100%;
  margin-bottom: 5vh !important;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.contactleft{
  width: 60%;
  padding: 5% 10% 0% 10%;
}
.contactright{
  width: 40%;
  min-height: 110vh;
  overflow-x: hidden;

}
.contact_img{
  width: 100%;
  min-height: 110vh;
}
.contactheading{
  font-family: 'Times New Roman', Times, serif;
}
.contact-form{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
 
}
.contact-fields{
  width: 45%;
}
.contact-fields.lastname{
  margin-left: 10%;
}
.contact-fields.subject{
  margin-left: 10%;
}
.contact-fields.message{
  width: 100%;
}
.contact-inputs{
  width: 100%;
  height: 8vh;
  font-size: 1.1rem;
}
#message{
  width: 100%;
  height: 20vh;
} 
.contact_img{
  width: 100%;
}





//Contact for tablet
@media only screen and (min-width: 768px) and (max-width: 1020px){
  
}
  


// Carousel Section
.react-multiple-carousel__arrow--left {
    left: 4px;
    position: absolute;
  
  
}
.react-multiple-carousel__arrow--right {
    right: 4px;
    position: absolute;

}
.react-multi-carousel-item{
  display: flex;
  justify-content: center;
}
.react-multi-carousel-list{
  margin-top: 10vh !important;
}
`;

export default GlobalStyle;
