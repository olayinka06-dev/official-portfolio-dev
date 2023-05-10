// import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'
// import img1 from  './images/img/portfolio/portfolio-1.jpg';
// import styled from 'styled-components';

// const Portfolio2 = () => {

//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//       }, []);

//   const [filter, setFilter] = useState("*");

//   const handleFilter = (event) => {
//     setFilter(event.target.dataset.filter);
//   };

//   const portfolios = [    
//     {      filter: "app",      title: "App 1",      type: "App",      imgSrc: "https://example.com/app1.png",      lightboxSrc: "./images/img/portfolio/portfolio-1.jpg",      detailsLink: "portfolio-details.html",    },
//     {      filter: "web",      title: "Web 3",      type: "Web",      imgSrc: "https://example.com/website1.png",      lightboxSrc: "./images/img/portfolio/portfolio-2.jpg",      detailsLink: "portfolio-details.html",    },
//     {      filter: "app",      title: "App 2",      type: "App",      imgSrc: "https://example.com/blog1.png",      lightboxSrc: "./images/img/portfolio/portfolio-3.jpg",      detailsLink: "portfolio-details.html",    },
//     {      filter: "card",      title: "Card 2",      type: "Card",      imgSrc: "https://example.com/app2.png",      lightboxSrc: "./images/img/portfolio/portfolio-4.jpg",      detailsLink: "portfolio-details.html",    },
//     // {      filter: "web",      title: "Web 2",      type: "Web",      imgSrc: "./images/img/portfolio/portfolio-5.jpg",      lightboxSrc: "./images/img/portfolio/portfolio-5.jpg",      detailsLink: "portfolio-details.html",    },
//     // {      filter: "web",      title: "Web 2",      type: "Web",      imgSrc: "./images/img/portfolio/portfolio-6.jpg",      lightboxSrc: "./images/img/portfolio/portfolio-6.jpg",      detailsLink: "portfolio-details.html",    },
//     // {      filter: "web",      title: "Web 2",      type: "Web",      imgSrc: "./images/img/portfolio/portfolio-7.jpg",      lightboxSrc: "./images/img/portfolio/portfolio-7.jpg",      detailsLink: "portfolio-details.html",    },
//     // {      filter: "web",      title: "Web 2",      type: "Web",      imgSrc: "./images/img/portfolio/portfolio-8.jpg",      lightboxSrc: "./images/img/portfolio/portfolio-8.jpg",      detailsLink: "portfolio-details.html",    },
//     // {      filter: "web",      title: "Web 2",      type: "Web",      imgSrc: "./images/img/portfolio/portfolio-9.jpg",      lightboxSrc: "./images/img/portfolio/portfolio-9.jpg",      detailsLink: "portfolio-details.html",    },
// ]    

//   return (
//     <Wrapper>
//             <section id="portfolio" className="portfolio section-bg">
//       <div className="container" data-aos="fade-up">
//         <div className="section-title">
//           <h2>Portfolio</h2>
//           <p>
//             Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
//             aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
//             quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
//             fugiat sit in iste officiis commodi quidem hic quas.
            
//           </p>
//           <img src={img1} alt={img1} />
//         </div>

//         <div className="row">
//           <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up">
//             <ul id="portfolio-flters">
//               <li onClick={handleFilter} data-filter="*" className={filter === "*" ? "filter-active" : ""}>
//                 All
//               </li>
//               <li onClick={handleFilter} data-filter=".filter-app" className={filter === ".filter-app" ? "filter-active" : ""}>
//                 App
//               </li>
//               <li onClick={handleFilter} data-filter=".filter-card" className={filter === ".filter-card" ? "filter-active" : ""}>
//                 Card
//               </li>
//               <li onClick={handleFilter} data-filter=".filter-web" className={filter === ".filter-web" ? "filter-active" : ""}>
//                 Web
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="row portfolio-container" data-aos="fade-up">
//           {
//           portfolios.filter((portfolio) => portfolio.filter === filter || filter === "*")
//             .map((portfolio, index) => (
//             <div key={index} className={`col-lg-4 col-md-6 portfolio-item ${portfolio.filter}`}>
//                 <div className="portfolio-wrap">
//                     <img src={portfolio.imgSrc} className="img-fluid" alt={portfolio.title} />
//                     <div className="portfolio-info">
//                         <h4>{portfolio.title}</h4>
//                         <p>{portfolio.type}</p>
//                         <div className="portfolio-links">
//                             <a href={portfolio.lightboxSrc} data-glightbox="portfolio-lightbox" className="venobox" title={portfolio.title}>
//                             <i className="bx bx-plus"></i>
//                             </a>
//                             <a href={portfolio.detailsLink} className="details-link" title="More Details">
//                             <i className="bx bx-link"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             ))}
//             </div>
//             </div>
//     </section>
//     </Wrapper>
//     );
// };
// const Wrapper = styled.div`

// .portfolio .portfolio-item {
//   margin-bottom: 30px;
// }

// .portfolio #portfolio-flters {
//   padding: 0;
//   margin: 0 auto 25px auto;
//   list-style: none;
//   text-align: center;
//   background: #fff;
//   border-radius: 50px;
//   padding: 2px 15px;
// }

// .portfolio #portfolio-flters li {
//   cursor: pointer;
//   display: inline-block;
//   padding: 10px 15px;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
//   text-transform: uppercase;
//   color: #272829;
//   margin-bottom: 5px;
//   transition: all 0.3s ease-in-out;
// }

// .portfolio #portfolio-flters li:hover,
// .portfolio #portfolio-flters li.filter-active {
//   color: #0563bb;
// }

// .portfolio #portfolio-flters li:last-child {
//   margin-right: 0;
// }

// .portfolio .portfolio-wrap {
//   transition: 0.3s;
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
//   background: rgba(69, 80, 91, 0.8);
// }

// .portfolio .portfolio-wrap::before {
//   content: "";
//   background: rgba(255, 255, 255, 0.7);
//   position: absolute;
//   left: 30px;
//   right: 30px;
//   top: 30px;
//   bottom: 30px;
//   transition: all ease-in-out 0.3s;
//   z-index: 2;
//   opacity: 0;
// }

// .portfolio .portfolio-wrap .portfolio-info {
//   opacity: 0;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   text-align: center;
//   z-index: 3;
//   transition: all ease-in-out 0.3s;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .portfolio .portfolio-wrap .portfolio-info::before {
//   display: block;
//   content: "";
//   width: 48px;
//   height: 48px;
//   position: absolute;
//   top: 35px;
//   left: 35px;
//   border-top: 3px solid #d7dce1;
//   border-left: 3px solid #d7dce1;
//   transition: all 0.5s ease 0s;
//   z-index: 9994;
// }

// .portfolio .portfolio-wrap .portfolio-info::after {
//   display: block;
//   content: "";
//   width: 48px;
//   height: 48px;
//   position: absolute;
//   bottom: 35px;
//   right: 35px;
//   border-bottom: 3px solid #d7dce1;
//   border-right: 3px solid #d7dce1;
//   transition: all 0.5s ease 0s;
//   z-index: 9994;
// }

// .portfolio .portfolio-wrap .portfolio-info h4 {
//   font-size: 20px;
//   color: #45505b;
//   font-weight: 600;
// }

// .portfolio .portfolio-wrap .portfolio-info p {
//   color: #45505b;
//   font-size: 14px;
//   text-transform: uppercase;
//   padding: 0;
//   margin: 0;
// }

// .portfolio .portfolio-wrap .portfolio-links {
//   text-align: center;
//   z-index: 4;
// }

// .portfolio .portfolio-wrap .portfolio-links a {
//   color: #45505b;
//   margin: 0 2px;
//   font-size: 28px;
//   display: inline-block;
//   transition: 0.3s;
// }

// .portfolio .portfolio-wrap .portfolio-links a:hover {
//   color: #148af9;
// }

// .portfolio .portfolio-wrap:hover::before {
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   opacity: 1;
// }

// .portfolio .portfolio-wrap:hover .portfolio-info {
//   opacity: 1;
// }

// .portfolio .portfolio-wrap:hover .portfolio-info::before {
//   top: 15px;
//   left: 15px;
// }

// .portfolio .portfolio-wrap:hover .portfolio-info::after {
//   bottom: 15px;
//   right: 15px;
// }

// /*--------------------------------------------------------------
// # Portfolio Details
// --------------------------------------------------------------*/
// .portfolio-details {
//   padding-top: 40px;
// }

// .portfolio-details .portfolio-details-slider img {
//   width: 100%;
// }

// .portfolio-details .portfolio-details-slider .swiper-pagination {
//   margin-top: 20px;
//   position: relative;
// }

// .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
//   width: 12px;
//   height: 12px;
//   background-color: #fff;
//   opacity: 1;
//   border: 1px solid #0563bb;
// }

// .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
//   background-color: #0563bb;
// }

// .portfolio-details .portfolio-info {
//   padding: 30px;
//   box-shadow: 0px 0 30px rgba(69, 80, 91, 0.08);
// }

// .portfolio-details .portfolio-info h3 {
//   font-size: 22px;
//   font-weight: 700;
//   margin-bottom: 20px;
//   padding-bottom: 20px;
//   border-bottom: 1px solid #eee;
// }

// .portfolio-details .portfolio-info ul {
//   list-style: none;
//   padding: 0;
//   font-size: 15px;
// }

// .portfolio-details .portfolio-info ul li+li {
//   margin-top: 10px;
// }

// .portfolio-details .portfolio-description {
//   padding-top: 30px;
// }

// .portfolio-details .portfolio-description h2 {
//   font-size: 26px;
//   font-weight: 700;
//   margin-bottom: 20px;
// }

// .portfolio-details .portfolio-description p {
//   padding: 0;
// }


// `
// export default Portfolio2;