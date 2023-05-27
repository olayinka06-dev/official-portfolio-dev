import React, { useEffect } from 'react';
import styled from 'styled-components';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';


const Testimonial = () => {
    useEffect(() => {
        new Swiper('.testimonials-slider', {
            speed: 600,
            loop: true,
            slidesPerView: 3,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
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
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
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
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
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
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
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
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
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
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
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
  color: #111;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #999;
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
  .testimonials .testimonial-item p {
    width: 80%;
  }
}
`
export default Testimonial;