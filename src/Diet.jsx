import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { uri } from './constant';


const Diet = () => {
  const [calory, setCalory] = useState(0);


  useEffect(() => {
    const handleLoad = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        const response = await axios.post(`${uri}Bmr`, {
          email: userEmail,
        });
        setCalory(response.data.calories);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, []);


  return (
    <StyledDiet calory={calory}>
      <div id="red" className='container'>
        <a href={`./Resorces/Cal1200.jpg`} download>
          <FontAwesomeIcon style={{ color: '#CC3D00', fontSize: '2rem', marginLeft: '90%' }} icon={faFile} />

        </a>
        <img src="./Resorces/Cal1200.jpg" alt="" />

      </div>
      <div id="blue" className='container'>
        <a href={`./Resorces/Cal1500.jpg`} download>
          <FontAwesomeIcon style={{ color: '#CC3D00', fontSize: '2rem', marginLeft: '90%' }} icon={faFile} />
        </a>

        <img src="./Resorces/Cal1500.jpg" alt="" />

      </div>
      <div id="green" className='container'>
        <a href={`./Resorces/Cal1800.jpg`} download>

          <FontAwesomeIcon style={{ color: '#CC3D00', fontSize: '2rem', marginLeft: '90%' }} icon={faFile} />
        </a>

        <img src="./Resorces/Cal1800.jpg" alt="" />

      </div>
      <div id="yellow" className='container'>
        <a href={`./Resorces/Cal1800.jpg`} download>

          <FontAwesomeIcon style={{ color: '#CC3D00', fontSize: '2rem', marginLeft: '90%' }} icon={faFile} />
        </a>

        <img src="./Resorces/Cal2000.jpg" alt="" />

      </div>

    </StyledDiet>
  );
};

const StyledDiet = styled.div`
    background-color: #CC3D00;
    

  #red {
    background-color:#fff;
    display: ${({ calory }) => (calory >= 600 && calory < 1500 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* border: 1px solid rgba(0, 0, 0, 0.4); 
    border-radius: 8px; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    
  }
  #blue {
    background-color:#fff;
    display: ${({ calory }) => (calory >= 1500 && calory < 1800 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    /* border: 1px solid rgba(0, 0, 0, 0.4); 
    border-radius: 8px; */
  }
  #green {
    background-color:#fff;
    display: ${({ calory }) => (calory >= 1800 && calory < 2000 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjust shadow as needed */
    /* border: 1px solid rgba(0, 0, 0, 0.4);  */
    /* border-radius: 8px; */
  }
  #yellow {
    background-color:#fff;

    display: ${({ calory }) => (calory >= 2000 ? 'flex' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    /* border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 8px; */
  }
  .container {
    margin: auto;
    width: 90%;
    min-height: 100vh;
  }
  img{
    margin-left: 5%;
    width: 90%;

  }
`;

export default Diet;
