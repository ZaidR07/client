import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { uri } from './constant';

const Workout = () => {
  const [Level, setLevel] = useState("");
  const [clock, setClock] = useState(31);
  const [sessionstart, setSessionstart] = useState(false);
  const [workout, setWorkout] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [sessionComplete, setSessionComplete] = useState(false);

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        const response = await axios.post(`${uri}Level`, {
          email: userEmail,
        });
        const workoutresponse = await axios.get(`${uri}Workoutget`);
        setLevel(response.data.level);
        setWorkout(workoutresponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, []);

  useEffect(() => {
    setClock(10); // Reset the clock whenever currentIndex changes
  }, [currentIndex]);

  const handleboxclick = (event) => {
    setClicked(true);
    const clickedBox = event.currentTarget;
    const workoutimg = clickedBox.querySelector('.workout_img');
    const h3Element = clickedBox.querySelector('h3');

    // Clear the previous interval timer
    clearInterval(timer);

    clickedBox.style.width = "calc(60%)";
    clickedBox.style.height = "50vh";
    clickedBox.style.display = "grid";
    clickedBox.style.placeItems = "center";
    clickedBox.style.zIndex = 1;
    workoutimg.style.display = "none";
    h3Element.style.display = "none";

  };

  const handlecrossbtn = (event) => {
    window.location.reload()

    
  };

  const start = () => {
    setSessionstart(true);
    setTimer(setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= workout.length) {
          clearInterval(timer);
          setSessionComplete(true);
        }
        return nextIndex;
      });
    }, 10000));
    clocktimer(); // Start the clock timer
  };

  const clocktimer = () => {
    const intervalId = setInterval(() => {
      if (clock > 0) {
        setClock(prevClock => prevClock - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  };

  return (
    <StyledWorkout Level={Level} clicked={clicked}>
      <div className="red">
        <div className="workout-container">
          <div className="box" onClick={handleboxclick}>
          <h3 style={{ textAlign: 'center' }}>Full Body Workout</h3>
            <img src="./Resorces/Full_Body.png" alt="Full Body" className='workout_img'/>
            {!sessionstart && !clicked && !sessionComplete && <button style={{width:'40%'}} onClick={start}>Start</button>}
            {clicked && workout.length > 0 && workout.map((item, index) => (
              <div className="content" key={index} style={{ display: index === currentIndex ? 'flex' : 'none' }}>
                <div className="left">
                  <video className="workout_video" autoPlay loop muted>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="right">
                  <h3>{item.name}</h3>
                  <p>{item.reps} Reps / Seconds</p><br /><br />
                  <p>{clock}</p>
                </div>
              </div>
            ))}
            {sessionComplete && <button className='crossbtn'> <FontAwesomeIcon icon={faXmark} className='awesomeicons' id='cross' onClick={handlecrossbtn} /></button>}
            {sessionComplete && <h2 className="session-complete">Session Complete</h2>}
          </div>
        </div>
      </div>
      <div className="blue">
        <div className="workout-container">
          <div className="box" onClick={handleboxclick}>
            <h3 style={{ textAlign: 'center' }}>Full Body Workout</h3>
            <img src="./Resorces/Full_Body.png" alt="Full Body" className='workout_img'/>
            {!sessionstart && !clicked && !sessionComplete && <button style={{width:'40%'}} onClick={start}>Start</button>}
            {clicked && workout.length > 0 && workout.map((item, index) => (
              <div className="content" key={index} style={{ display: index === currentIndex ? 'flex' : 'none' }}>
                <div className="left">
                  <video className="workout_video" autoPlay loop muted>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="right">
                  <h3>{item.name}</h3>
                  <p>{parseInt(item.reps) + 5} Reps / Seconds</p><br /><br />
                  <p>{clock}</p>
                </div>
              </div>
            ))}
            {sessionComplete && <button className='crossbtn'> <FontAwesomeIcon icon={faXmark} className='awesomeicons' id='cross' onClick={handlecrossbtn} /></button>}
            {sessionComplete && <h2 className="session-complete">Session Complete</h2>}
          </div>
        </div>
      </div>
      <div className="green">
        <div className="workout-container">
          <div className="box" onClick={handleboxclick}>
          <h3 style={{ textAlign: 'center' }}>Full Body Workout</h3>
            <img src="./Resorces/Full_Body.png" alt="Full Body" className='workout_img'/>
            {!sessionstart && !clicked && !sessionComplete && <button style={{width:'40%'}} onClick={start}>Start</button>}
            {clicked && workout.length > 0 && workout.map((item, index) => (
              <div className="content" key={index} style={{ display: index === currentIndex ? 'flex' : 'none' }}>
                <div className="left">
                  <video className="workout_video" autoPlay loop muted>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="right">
                  <h3>{item.name}</h3>
                  <p>{parseInt(item.reps) + 10} Reps / Seconds</p><br /><br />
                  <p>{clock}</p>
                </div>
              </div>
            ))}
            {sessionComplete && <button className='crossbtn'> <FontAwesomeIcon icon={faXmark} className='awesomeicons' id='cross' onClick={handlecrossbtn} /></button>}
            {sessionComplete && <h2 className="session-complete">Session Complete</h2>}
          </div>
          {/* <div className="box" onClick={handleboxclick}>

          </div>
          <div className="box" onClick={handleboxclick}></div> */}
        </div>
      </div>
    </StyledWorkout>
  )
}

const StyledWorkout = styled.div`
  .red {
    display: ${({ Level }) => (Level === "Beginner" ? 'grid' : 'none')};
    background-color: #D04E17;
    width: 100%;
    min-height: 80vh;
    place-items: center;
  }
  .blue {
    display: ${({ Level }) => (Level === "Intermediate" ? 'grid' : 'none')};
    background-color: #D04E17;
    width: 100%;
    min-height: 80vh;
    place-items: center;
  }
  .green {
    display: ${({ Level }) => (Level === "Advanced" ? 'grid' : 'none')};
    background-color: #D04E17;
    width: 100%;
    min-height: 80vh;
    place-items: center;
  }
  
  .workout-container {
    display: flex;
    justify-content: space-around;
    margin: auto;
    width: 80%;
    padding: 10vh 2.5% 10vh 2.5%;
  }

  .box {
    display: grid;
    place-items: center ;
    width: calc((100% / 3) - 7.5%);
    height: 45vh;
    background-color: #fff;
    padding: 1%;
  }
  .box:hover{
    transform: ${({ clicked }) => (clicked ? 'scale(1)' : 'scale(1.2)')};
    transition: all 0.2s;
  }

  .content{
    width: 100%;
    padding: 2%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .left{
    width: 30%;
    min-height: 35vh;
  }

  .right{
    width: 30%;
  }

  

  .workout_video{
        width: 100%;
        max-height: 35vh;
        object-fit: contain;
      
  }

  .crossbtn{
    margin-left: -98%;
    margin-top: -15vh;
    font-size: 1.2rem;
  }

  .workout_img{
    width: 80%;
    object-fit: contain;
  }

`

export default Workout;
