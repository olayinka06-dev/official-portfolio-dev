import React from 'react'
import About from '../About Page/About'
import Contact from '../Contact Page/Contact';
import Hero from '../Hero Page/Hero';
import BackToTop from '../Back to top/BackToTop';
import { useState } from 'react';
import {MdOutlineNightlight, MdOutlineLightMode} from "react-icons/md"
import '../../index.css';
import NavigationBar from '../Navigation Page/NavigationBar';
import Portfolio from '../Portfolio Page/Portfolio';



const Home2 = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleMode = () => setIsDarkMode(prev => !prev);

  
    return (
      <div className={ `app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <NavigationBar 
          handleToggleSwitcher={handleToggleMode}
          backgroundSwitcher={
          isDarkMode ?  <span><MdOutlineLightMode className='icon'/><span style={{position: 'relative', bottom: '5px'}}>Light Mode</span></span> : <span><MdOutlineNightlight className='icon'/><span style={{position: 'relative', bottom: '5px'}}>Dark Mode</span></span>
          }
        />
        <main>
          <Hero/>
          <About/>
          <Portfolio/>
          <Contact/>
          <BackToTop/>
        </main>
      </div>
    );
  }
  

export default Home2;

