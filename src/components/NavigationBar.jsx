import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profileimg from './images/profile-img.jpg';
import {HiOutlineHome} from "react-icons/hi";
import {RxPerson} from "react-icons/rx";
import {AiOutlineFile, AiOutlineMail} from "react-icons/ai";
import {BiBookContent} from "react-icons/bi";
import {CgDatabase} from "react-icons/cg";
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavigationBar = ({backgroundSwitcher, handleToggleSwitcher, activeLink}) => {

  //toggle button usestate
    const [menu, setMenu] = useState(false);

    //function to open and close the mobile nav
    const toggleMenu = () => {
      setMenu(!menu)
    }

    //Aos fadding effect
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    return (
      <Wrapper>
        <aside  className={`${menu ? 'mobile-toggler' : ''}`}>
          <div class="profile box-4">
            <img src={profileimg} alt={profileimg} />
            <h1>Olayinka_Dev</h1>
          </div>
          <ul className='aside-desktop'>
            <li data-aos='fade-right'>
              <a href="#hero" className={activeLink === '#home' ? 'active' : ''}><HiOutlineHome className='icon'/>Home</a>
            </li>
            <li data-aos='fade-left'> 
              <a href="#about" className={activeLink === '#about' ? 'active' : ''}><RxPerson className='icon'/>About</a>
            </li>
            <li data-aos='fade-right'>
              <a href="#resume" className={activeLink === '#resume' ? 'active' : ''}><AiOutlineFile className='icon'/>Resume</a>
            </li>
            <li data-aos='fade-left'> 
              <a href="#portfolio" className={activeLink === '#portfolio' ? 'active' : ''}><BiBookContent className='icon'/>Portfolio</a>
            </li>
            <li data-aos='fade-right'>
              <a href="#services" className={activeLink === '#services' ? 'active' : ''}><CgDatabase className='icon'/>Services</a>
            </li>
            <li data-aos='fade-left'>
              <a href="#contact" className={activeLink === '#contact' ? 'active' : ''}><AiOutlineMail className='icon'/>Contact</a>
            </li>
            <li>
                <Link onClick={handleToggleSwitcher}>{backgroundSwitcher}</Link>
            </li>
          </ul>
          <button onClick={toggleMenu} className={`${menu ? 'toggle open' : 'toggle'}`}>
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </button>
        </aside>
      </Wrapper>
    );
      
}

const Wrapper = styled.aside`

  aside{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: var(--navigationbody);
    overflow-y: auto;
    font-family: 'Open Sans', sans-serif;
    box-shadow: var(--navshadow);
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: hidden;
  }
  .profile h1{
    text-align: center;
    color: var(--letter)
  }
  .profile img {
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid var(--navlinkbackground);
    border-radius: 50%;
  }
  .aside-desktop{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  li {
    background-color: var(--navlinkbackground);
    padding: 13px 0;
    padding-left: 7px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  li:hover {
    color: #fff;
    background: var(--activehover);

  }

  li:hover a {
  color: white;
  }

  li.active {
    background: var(--activehover);
  }

  li.active a {
    color: white;
  }

  li a {
    color: var(--navlinkcolor);
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }
  .icon {
    margin-right: 5px;
    font-size: 1.5rem;
  }
  .toggle {
    border: none;
    background: var(--activehover);
    cursor: pointer;
    min-width: 40px;
    height: 40px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all .2s ease-in-out;
    position: fixed;
    top: 2%;
    right: 2%;
    border-radius: 50%;
  }
.toggle div{
  background-color: white;
  height: 2px;
  width: 25px;
  transition: all .4s ease;
  margin-top: 5px 0;
}
.toggle.open .first {
  transform: rotate(-45deg) translate(1px, 11px);
  margin-right: 15px;
}
.toggle.open .second {
  opacity: 0;
}
.toggle.open .third {
  transform: rotate(45deg) translate(1px, -11px);
  margin-right: 15px;

}
@media screen and (max-width: 992px) {
  .toggle{
    display: flex;
  }

}  
  .box-2 {
    opacity: 0;
    transform: translateX(-100%);
    animation: slide-fade-in-two 1s forwards;
  }

  @keyframes slide-fade-in-two {
    from {
      opacity: 0;
      transform: translateX(-100%);

    }
    to {
      opacity: 1;
      transform: translateX(0px);

    }
  }
  .box-3 {
    opacity: 0;
    transform: translateX(100%);
    animation: slide-fade-in-three 1s forwards;
  }

  @keyframes slide-fade-in-three {
    from {
      opacity: 0;
      transform: translateX(100%);

    }
    to {
      opacity: 1;
      transform: translateX(0px);

    }
  }
  .box-4 {
    opacity: 0;
    scale: 0;
    animation: slide-fade-in-four 1s forwards;
  }

  @keyframes slide-fade-in-four {
    from {
      opacity: 0;
      scale: 0;
    }
    to {
      opacity: 1;
      scale: 100%;
    }
  }

  @media screen and (max-width: 992px) {
    aside {
      width: 300px;
      background: var(--mainbody);
      border-right: 1px solid #e6e9ec;
      height: 100vh;
      left: -300px;
      overflow: hidden;
    }
    .mobile-toggler{
      left: 0;
    }
    .toggle{
      display: flex;
    }

  }

`

export default NavigationBar;