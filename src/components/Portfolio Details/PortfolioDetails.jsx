// // import Swiper from 'swiper';
// // import 'swiper/css/swiper.css';
// import SwiperCore, { Pagination, Navigation } from 'swiper';
// import 'swiper/swiper-bundle.css';

// SwiperCore.use([Pagination, Navigation]);
// import { useState, useEffect } from 'react';
// import Swiper from 'swiper';

// function MySwiper() {
//   const [swiper, setSwiper] = useState(null);

//   useEffect(() => {
//     const newSwiper = new Swiper('.swiper-container', {
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//     setSwiper(newSwiper);
//   }, []);

//   return (
//     <div className="swiper-container">
//       <div className="swiper-wrapper">
//         <div className="swiper-slide">Slide 1</div>
//         <div className="swiper-slide">Slide 2</div>
//         <div className="swiper-slide">Slide 3</div>
//       </div>
//       <div className="swiper-pagination"></div>
//       <div className="swiper-button-next"></div>
//       <div className="swiper-button-prev"></div>
//     </div>
//   );
// }

// export default MySwiper;
// .swiper-container {
//     width: 100%;
//     height: 400px;
//   }
  
//   .swiper-slide {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 30px;
//   }
  
//   .swiper-pagination {
//     position: absolute;
//     bottom: 10px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
  
//   .swiper-button-next,
//   .swiper-button-prev {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     background-color: rgba(255, 255, 255, 0.7);
//     color: #333;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//   }
  
//   .swiper-button-next {
//     right: 10px;
//   }
  
//   .swiper-button-prev {
//     left: 10px;
//   }
  
