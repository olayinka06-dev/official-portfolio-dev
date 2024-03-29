import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiLink, BiPlus } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  {
    src: './img/portfolio/portfolio-1.jpg',
    alt: 'Screenshot of App 1',
    category: 'App',
    title: 'App 1',
    link: 'https://olayinka-dev-portfolio.netlify.app',
    name: "Toshconsultinc Website",
  },
  {
    src: './img/portfolio/portfolio-2.jpg',
    alt: 'Screenshot of Website 1',
    category: 'Website',
    title: 'Website 1',
    link: 'https://olayinka-dev-portfolio.netlify.app',
    name: "Men On Mission Website",
  },
  {
    src: './img/portfolio/portfolio-3.jpg',
    alt: 'Screenshot of Blog 1',
    category: 'Blog',
    title: 'Blog 1',
    link: 'https://olayinka-dev-portfolio.netlify.app',
    name: "Falconpay Website",
  },
  {
    src: './img/portfolio/portfolio-4.jpg',
    alt: 'Screenshot of App 2',
    category: 'App',
    title: 'App 2',
    link: 'https://olayinka-dev-portfolio.netlify.app',
    name: "Dictionary Website",
  },
  {
    src: './img/portfolio/portfolio-5.jpg',
    alt: 'Screenshot of Website 2',
    category: 'Website',
    title: 'Website 2',
    link: 'https://olayinka-dev-portfolio.netlify.app',
    name: "Weather Website",
  },
  {
    src: './img/portfolio/portfolio-6.jpg',
    alt: 'Screenshot of Blog 2',
    category: 'Blog',
    tile: 'Blog 2',
    link: 'https://olayinka-dev-portfolio.netlify.app',
    name: "Url Shortener Website",
  }
];

const portfolioToDisplay = images.slice(0,6)

const GroupPortfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Welcome to my portfolio, where I present a collection of my work, ranging from web development projects to applications and blog designs. My focus is on delivering top-notch outcomes that cater to the requirements of both clients and users. Take a closer look at the various categories below to explore diverse examples showcasing my skill set. If you have any inquiries or would like to collaborate, please don't hesitate to contact me. Thank you for taking the time to visit!</p>
          </div>
          <div className="top" data-aos="fade-up">
          <ul id="portfolio-flters">
            <li onClick={() => setSelectedFilter('All')} className={selectedFilter === 'All' ? 'active' : ''}>All</li>
            <li onClick={() => setSelectedFilter('Website')} className={selectedFilter === 'Website' ? 'active' : ''}>Website</li>
            <li onClick={() => setSelectedFilter('App')} className={selectedFilter === 'App' ? 'active' : ''}>App</li>
            <li onClick={() => setSelectedFilter('Blog')} className={selectedFilter === 'Blog' ? 'active' : ''}>Blog</li>
          </ul>
          </div>
          <div className="row portfolio-container" data-aos="fade-up">
            {portfolioToDisplay.filter(image => selectedFilter === 'All' || image.category === selectedFilter)
              .map((image, index) => (
                <div className="portfolio-item" key={index}>
                  <div className="portfolio-wrap">
                    <div className="image-container">
                      <img src={image.src} alt={image.alt} />
                    </div>
                    <div className="portfolio-info">
                      <h4>{image.title}</h4>
                      <p>{image.category}</p>
                      <div class="portfolio-links">
                        <a href={image.src} data-gallery="portfolioGallery" className="portfolio-lightbox" title={image.title}><i><BiPlus/></i></a>
                        <a href={"/portfolio-details"} className="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"><BiLink/></i></a>
                      </div>
                    </div>
                  </div>
                  <div style={{width: "100%", textAlign: "center"}}>
                    <span>{image.name}</span>
                  </div>
                  <div className="btn-group">
                    <a href={image.link} className='hire text-center'>View Live Demo</a>
                  </div>
                </div>
                
              ))}
          </div>
        </div>
    </section>
    </Wrapper>
  );
}


const Wrapper = styled.section`
.portfolio{
  background-color: var(--sectionbackground);
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
}
span{
  color: var(--herocolor);
  margin-top: 10px;
}
.top{
  width: 100%;
  display: flex;
  justify-content: center;
} 
.portfolio .portfolio-container {
  width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* Add the desired gap value */
    
  }
.portfolio .portfolio-item {
  margin-bottom: 30px;
  border: 1px solid var(--herocolor);
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  transition: all 3s ease;
}
.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.active {
  color: var(--herocolor);
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}
.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 3s ease;
  width: 100%;
}
.btn-group{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  margin-top: 14px;
  z-index: 9999;
}
.btn-group a{
  width: 100%;
}
.image-container {
    width: 100%;
    height: 0;
    padding-bottom: 75%; /* Adjust the aspect ratio as needed */
    position: relative;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: scale 9s linear infinite;
  }
@keyframes scale {
  0%{transform: scaleX(115%) scaleY(120%);}
  50%{transform: scaleX(100%) scaleY(100%);}
  100%{transform: scaleX(115%) scaleY(120%);}}
.portfolio .portfolio-wrap::before {
  content: "";
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.portfolio .portfolio-wrap .portfolio-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio .portfolio-wrap .portfolio-info::before {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 35px;
  border-top: 3px solid #d7dce1;
  border-left: 3px solid #d7dce1;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid #d7dce1;
  border-right: 3px solid #d7dce1;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  color: #45505b;
  font-weight: 600;
}

.portfolio .portfolio-wrap .portfolio-info p {
  color: #45505b;
  font-size: 14px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.portfolio .portfolio-wrap .portfolio-links {
  text-align: center;
  z-index: 4;
}

.portfolio .portfolio-wrap .portfolio-links a {
  color: #45505b;
  margin: 0 2px;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
  color: #148af9;
}

.portfolio .portfolio-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info::before {
  top: 15px;
  left: 15px;
}

.portfolio .portfolio-wrap:hover .portfolio-info::after {
  bottom: 15px;
  right: 15px;
}
@media screen and (max-width: 992px) {
  .portfolio .portfolio-container {
      grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 768px) {
  .portfolio .portfolio-container {
      grid-template-columns: repeat(1, 1fr);
    }
}

`


export default GroupPortfolio;
