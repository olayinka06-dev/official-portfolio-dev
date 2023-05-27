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
import styled from 'styled-components';
import Footer from '../Footer Page/Footer';
import Services from '../Services page/Services';
import Testimonial from '../Testimonial page/Testimonial';
import Resume from '../Resume Page/Resume';



const Home2 = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleMode = () => setIsDarkMode(prev => !prev);

  
    return (
      <Wrapper>
        <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <header>
            <NavigationBar 
              handleToggleSwitcher={handleToggleMode}
              checked={isDarkMode}
              backgroundSwitcher={
              isDarkMode ?  <span><MdOutlineLightMode className='icon'/><span style={{position: 'relative', bottom: '5px'}}></span></span> : <span><MdOutlineNightlight className='icon'/><span style={{position: 'relative', bottom: '5px'}}></span></span>
              }
            />
          </header>
          <main>
            <Hero/>
            <About/>
            <Resume/>
            <Portfolio/>
            <Services/>
            <Testimonial/>
            <Contact/>
            <BackToTop/>
          </main>
          <div>
            <Footer/>
          </div>
        </div>
      </Wrapper>

    );
  }
  
const Wrapper = styled.div`
  .app{
    background-color: var(--mainbody);
  }
  .icon{
    color: var(--text);
  }

`
export default Home2;

