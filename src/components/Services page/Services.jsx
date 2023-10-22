import { FaLaptopCode } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import React, {  useEffect } from "react";
import styled from "styled-components";
import '../../index.css';

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in",
    });
  }, []);

  return (
    <Wrapper>
      <section id="services">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Explore a wide range of services I offer, meticulously customized to
            address your unique requirements. I specialize in delivering expert
            solutions that empower your success in the dynamic realm of digital
            innovation.
          </p>
        </div>
        <div
          id="service"
          className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 py-20 px-5"
        >
          <div className="  five  justify-center items-center text-center   w-full">
            <div className="services-box">
              <div className="count">
                <span>01</span>
              </div>
              <div className="icon mt-5">
                <FaLaptopCode style={{ width: "100%", fontSize: "3.5vmax" }} />
                <i className="fas fa-laptop-code"></i>
              </div>
              <h2 className="mt-7">Web Design</h2>
              <p className="mt-5 ">
                I Develop full-blown web apps using HTML,Javascript, React and
                Tailwind CSS.
              </p>
              
            </div>
          </div>
          <div className=" justify-center five items-center text-center  w-full">
            <div className="services-box">
              <div className="count">
                <span>02</span>
              </div>
              <div className="icon mt-5">
                <FaLayerGroup style={{ width: "100%", fontSize: "3.5vmax" }} />
                <i className="fas fa-laptop-code"></i>
              </div>
              <h2 className="mt-7">Web Development</h2>
              <p className="mt-5 ">
                In nisi tortor, consequat eu semper ut, consequat in massa.
                Maecenas at odio a felis commodo pulvinar quis eu neque.
              </p>
              
            </div>
          </div>
          <div className="  justify-center items-center text-center five w-full ">
            <div className="services-box">
              <div className="count">
                <span>03</span>
              </div>
              <div className="icon mt-5">
                <FaCcApplePay style={{ width: "100%", fontSize: "3.5vmax" }} />
                <i className="fas fa-laptop-code"></i>
              </div>
              <h2 className="mt-7">App Development</h2>
              <p className="mt-5 ">
                In nisi tortor, consequat eu semper ut, consequat in massa.
                Maecenas at odio a felis commodo pulvinar quis eu neque.
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  #service {
    background-color: var(--sectionbackground);
  }
  .services-box:hover::after {
    -webkit-clip-path: circle(75%);
    clip-path: circle(75%);
  }
  .services-box::after {
    content: "";
    clear: both;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    background: var(--herocolor);
    top: 0;
    right: 0;
    z-index: -1;
    clip-path: circle(25% at 100% 0%);
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .services-box .count {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 50px;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #ffffff6e;
    color: transparent;
    line-height: 1.2;
  }
  .services-box:hover {
    transform: translateY(-35px);
    color: white !important;
  }
  .services-box:hover p, .services-box:hover h2{
    color: white !important;
    transition: all 0.4s ease-in-out;
  }
  .icon {
    transform: rotate(0deg);
  }
  .services-box p, h2{
    color: var(--text);
  }
  .services-box:hover .icon {
    color: white;
    transform: rotate(360deg);
    transition: all 0.4s ease-in-out;
  }
  .services-box {
    text-align: center;
    background: var(--mainbody);
    padding: 60px 40px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    z-index: 1;
    /* box-shadow: 0px 0px 10px 0px #e3e3e3; */
    border: 1px solid var(--herocolor);
  }

  @media screen and (max-width: 768px) {
    .twenty {
      display: flex;
      flex-direction: column;
    }
    #service {
      display: flex;
      flex-direction: column;
    }
  }

`;

export default Services;
