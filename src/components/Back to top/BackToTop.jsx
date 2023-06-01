import React, { useState } from 'react'
import styled from 'styled-components';
import {BsArrowUp} from 'react-icons/bs';
import '../../index.css';

const BackToTop = () => {

  const [visible, setVisible] = useState(false);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120) {
          setVisible(true)
        }
        else{
          setVisible(false)  
        }
    })

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }



  return (
    <Wrapper>
       <BsArrowUp onClick={scrollToTop} className={`${visible ? "back-to-top active" : "back-to-top"}`} />
    </Wrapper>

  )
}

const Wrapper = styled.div`
    
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .back-to-top{
    position: fixed;
    bottom: 3%;
    left: 90%;
    padding: 5px 15px;
    color: white;
    border-radius: 50%;
    visibility: hidden;
    opacity: 0;
    transition: all 1s ease;
    border: none;
    font-size: 40px;
    text-align: center;
    cursor: pointer;
    animation: animater 2s linear infinite;
    z-index: 1000;
    margin-top: 5px;
    background-color:  var(--activehover);
  }
  @keyframes animater {
    0%{transform: translateY(10px);}
    50%{transform: translateY(0px);}
    100%{transform: translateY(10px);}
  }
  svg{

  }

  .back-to-top.active{
    opacity: 1;
    visibility: visible;
  }


  @media screen and (max-width: 950px) {
    .back-to-top{
      left: 82%;
    }
  }

`

export default BackToTop;