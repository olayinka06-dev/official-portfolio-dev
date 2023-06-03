import React, { useEffect } from 'react';
import styled from 'styled-components';
import Swiper from 'swiper';
// import { Pagination } from 'swiper';
import 'swiper/swiper.min.css';

const Testimonial = () => {
    useEffect(() => {
        new Swiper('.swiper-container', {
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          spaceBetween: 30,
          slidesPerView: 1,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          breakpoints: {
            992: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            }
          }
        });
      }, []);
  return (
    <Wrapper>
            <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="./img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Working with Olayinka has been an incredible experience. His expertise in both frontend and backend development helped us build a robust and user-friendly web application. His attention to detail and problem-solving abilities are commendable.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="./img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Olayinka's frontend development skills is exceptional. He has an eye for design and always ensure that the user experience is top-notch. His dedication and commitment to delivering high-quality work make them a valuable asset to any project.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="./img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  I had the pleasure of collaborating with Olayinka on a complex web development project. His full stack expertise was evident throughout the process. He seamlessly integrated frontend and backend components, resulting in a highly functional and efficient application.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="./img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Olayinka's technical skills and ability to solve problems are impressive. He has a deep understanding of modern frontend frameworks like React and backend technologies like Node.js. His contributions significantly improved the overall performance and functionality of our web application.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="./img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  I highly recommend Olayinka for any web development project. His professionalism, clear communication, and commitment to meeting deadlines are remarkable.He consistently delivered high-quality code and exceeded our expectations.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

      </div>
    </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.testimonials{
  width: 100%;
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: var(--sectionbackground);
}
.testimonials .section-header {
  margin-bottom: 40px;
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  text-align: center;
  border: 1px solid var(--herocolor);
  border-radius: 20px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  margin: 0 auto;
}

.testimonials .testimonial-item h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: var(--para);
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: var(--text);
  margin: 0 0 15px 0;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: #90c8fc;
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 auto 15px auto;
  color: var(--para);
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #0563bb;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #0563bb;
}

@media (min-width: 992px) {
  .testimonials{
    padding: 30px 10px;
  }
  .testimonials .testimonial-item p {
    width: 80%;
  }
}
`
export default Testimonial;