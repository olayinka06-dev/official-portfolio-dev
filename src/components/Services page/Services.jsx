import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import website from '../images/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg';
import app from '../images/7-popular-business-applications-mobile-phones-2.png.webp';
import '../../index.css';
import ServiceData from './ServiceData';
import {IoIosArrowForward} from 'react-icons/io';

const Services = () => {

  const [services, setservices] = useState("");

  useEffect(() => {
    setservices(ServiceData)
  }, []);
  return (
    <Wrapper>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">

            <div  className="card" data-aos="zoom-in">
              <div class="cards">
                <div class="icon">
                  <img src={website} alt={website} />
                </div>
                <div className="info">
                  <h4><a href="/about">Website Development</a></h4>
                  {
                    services && (
                      services[0].website.map((service, index) => (
                        <ul key={index}>
                          <li><IoIosArrowForward/>{service}</li>
                        </ul>
                      ))
                    )
                  }
                  {
                    services && (
                      services[0].languages.map((language, index) => (
                        <ul className='website' key={index}>
                          <li  style={{ paddingLeft: `${(index + 1) * 5}px` }}>{language.icon} <span>{language.name}</span></li>
                        </ul>
                      ))
                    )
                  }
                </div>
              </div>
            </div>
            <div  className="card" data-aos="zoom-in">
              <div class="cards">
                <div class="icon">
                  <img src={app} alt={app} />
                </div>
                <div className="info">
                  <h4><a href="/about">App Development</a></h4>
                  {
                    services && (
                      services[1].app.map((service, index) => (
                        <ul key={index}>
                          <li><IoIosArrowForward/>{service}</li>
                        </ul>
                      ))
                    )
                  }
                  {
                    services && (
                      services[1].languages.map((language, index) => (
                        <ul className='app' key={index}>
                          <li  style={{ paddingLeft: `${(index + 1) * 5}px` }}>{language.icon} <span>{language.name}</span></li>
                        </ul>
                      ))
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.services{
  width: 100%;
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: var(--sectionbackground);
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding: 20px 60px;
  
}
.card {
  width: 100%;
  box-shadow: var(--serviceshadow);
  border: 1px solid var(--border);
  border-radius: 10px;
}
.info{
  padding: 20px;
}
.icon img{
  width: 100%;
  height: 35vh;
  transition: all 0.5s ease;
  opacity: 100%;
}

.icon:hover img {
  transform: scale(1.05);
  opacity: 90%;
}
ul {
  text-decoration: none;
  list-style: none;
}
.app, .website{
  position: relative;
  top: 20px;
}
li{
  color: var(--text);
}
.website li{
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--text);
  gap: 20px;
}
.app li{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  color: var(--text);
}
ul li svg{
  color: var(--herospan);
}
.services .icon-box {
  text-align: center;
  padding: 70px 20px 80px 20px;
  transition: all ease-in-out 0.3s;
  background: #fff;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.05);
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  position: relative;
}
.services .icon-box h4 {
  font-weight: 600;
  margin: 10px 0 15px 0;
  font-size: 22px;
}

.services .icon-box h4 a {
  color: #45505b;
  transition: ease-in-out 0.3s;
}
.cards {
    position: relative;
    overflow: hidden;
}
.cards:focus-within {
    outline: #68becd dashed 3px;
    outline-offset: 3px;
}

@media screen and (max-width: 992px) {
  .row{
    flex-direction: column;
  }
}



`
export default Services;