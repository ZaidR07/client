import React, { useState } from 'react';
import Home from "./Home";
import About from "./About";
import Diet from "./Diet";
import Workout from "./Workout";
import Contact from "./Contact";
import Shop from "./Shop";
import Header from "./Header";
import Footer from "./Footer";
import Copyright_policy from './Components/Terms/Copyright_policy';
import Terms_and_condition from './Components/Terms/Terms_and_condition';
import Privacy_policy from './Components/Terms/Privacy_policy';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Login_plus_register from "./Login_plus_register";
import Forgot_password from "./Components/Login_components/Forgot_password";
import Admin_panel from './Admin_panel';
import Survey from './Survey';
import Profile from './Profile';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const [adminLoggedIn, setAdminLoggedIn] = useState(localStorage.getItem('adminLoggedIn') === 'true');

  const theme = {
    colors: {
      heading: "",
      navbg: "#242426"
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> 
        <BrowserRouter>
          <>
          {(isLoggedIn || adminLoggedIn) && <Header setIsLoggedIn={setIsLoggedIn}  setAdminLoggedIn={setAdminLoggedIn} />}
            <Routes>
              {adminLoggedIn && (
                <Route path="/Admin_panel" element={<Admin_panel  setAdminLoggedIn={setAdminLoggedIn} />} />
              )}
              {!isLoggedIn && (
                <>
                  <Route path="/" element={<Login_plus_register setIsLoggedIn={setIsLoggedIn}  setAdminLoggedIn={setAdminLoggedIn}  />} />
                  <Route path="/Forgot_password" element={<Forgot_password />} />



                </>
              )}
              {isLoggedIn || adminLoggedIn ?  (
                <>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Workout" element={<Workout />} />
                  <Route path="/Diet" element={<Diet />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/Survey" element={<Survey />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Copyright" element={<Copyright_policy />} />
                  <Route path="/Privacy" element={<Privacy_policy />} />
                  <Route path="/Terms" element={<Terms_and_condition />} />



                </>
              ) : null}
            </Routes>
            {(isLoggedIn || adminLoggedIn) && <Footer />}

            
          </>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
