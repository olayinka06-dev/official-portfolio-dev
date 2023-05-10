import { useState } from 'react';
import styled from 'styled-components';

const images = [
  {
    src: './img/portfolio/portfolio-1.jpg',
    alt: 'Screenshot of App 1',
    category: 'App'
  },
  {
    src: './img/portfolio/portfolio-2.jpg',
    alt: 'Screenshot of Website 1',
    category: 'Website'
  },
  {
    src: './img/portfolio/portfolio-3.jpg',
    alt: 'Screenshot of Blog 1',
    category: 'Blog'
  },
  {
    src: './img/portfolio/portfolio-4.jpg',
    alt: 'Screenshot of App 2',
    category: 'App'
  },
  {
    src: './img/portfolio/portfolio-5.jpg',
    alt: 'Screenshot of Website 2',
    category: 'Website'
  },
  {
    src: './img/portfolio/portfolio-6.jpg',
    alt: 'Screenshot of Blog 2',
    category: 'Blog'
  }
];

function GroupPortfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <Wrapper>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="top">
          <ul id="portfolio-flters">
            <li onClick={() => setSelectedFilter('All')} className={selectedFilter === 'All' ? 'active' : ''}>All</li>
            <li onClick={() => setSelectedFilter('Website')} className={selectedFilter === 'Website' ? 'active' : ''}>Website</li>
            <li onClick={() => setSelectedFilter('App')} className={selectedFilter === 'App' ? 'active' : ''}>App</li>
            <li onClick={() => setSelectedFilter('Blog')} className={selectedFilter === 'Blog' ? 'active' : ''}>Blog</li>
          </ul>
          </div>
          <div className="row portfolio-container" >
            
            {images.filter(image => selectedFilter === 'All' || image.category === selectedFilter)
              .map((image, index) => (
                <div style={{display: "flex", flexDirection: "row"}} className="portfolio-item" key={index}>
                  <div className="portfolio-wrap">
                    <img src={image.src} alt={image.alt} />
                  </div>
                  
                </div>
                
              ))}
          </div>
          {/* <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
    </section>
    </Wrapper>
  );
}


const Wrapper = styled.section`
.top{
  width: 100%;
  display: flex;
  justify-content: center;
} 
.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  background: #fff;
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
  color: #272829;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.active {
  color: #0563bb;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}
.portfolio-item{
  display: flex !important;
  flex-direction: row !important;
}
.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(69, 80, 91, 0.8);
}
.portfolio-wrap img{
  width: 100%;
}
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

`


export default GroupPortfolio;
