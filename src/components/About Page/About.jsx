import React, { useEffect } from 'react';
import styled from 'styled-components';
import profileimg2 from '../images/profile2-img.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'


const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <Wrapper>
    <section id="about" className="about">
      <div className="about-container" data-aos='fade-up'>
        <div className="section-title">
          <h2>About <span className='about-me-color'>Me</span></h2>
          {/* <p>
            Hello, and welcome to my portfolio website! My name is [Your Name], and I am a versatile professional with extensive experience in web development and UI/UX design. I have worked as a senior frontend developer, backend developer, full-stack developer, and UI/UX designer for various companies and clients, and I have also worked as a freelancer on numerous projects.As a senior frontend developer, I specialize in building responsive and user-friendly web applications using modern technologies such as HTML, CSS, and JavaScript. I am skilled in developing dynamic web pages and user interfaces that are visually appealing and easy to use.
            In addition to my frontend development expertise, I am also proficient in backend development and have experience working with languages such as PHP, Python, and Node.js. This enables me to build robust and scalable web applications that can handle complex tasks and data processing.
            As a full-stack developer, I am comfortable working on both the frontend and backend of web applications, which allows me to deliver comprehensive solutions to clients. I have also worked as a UI/UX designer, which has given me a keen eye for design and user experience. I strive to create beautiful and intuitive user interfaces that are easy to navigate and use.
            As a freelancer, I have had the opportunity to work on a variety of projects for clients in different industries, which has helped me develop strong project management and communication skills. I am committed to delivering high-quality work that meets my clients' needs and exceeds their expectations.
            I am passionate about technology and constantly stay up-to-date with the latest industry trends and advancements. My goal is to use my skills and experience to create innovative and impactful web solutions that make a difference in people's lives.
            Thank you for visiting my portfolio website, and I look forward to connecting with you!
          </p> */}
          {/* <p>Hi there! I'm a web developer and an undergraduate medical student. I'm passionate about both fields and love to explore the intersection between technology and healthcare.</p> */}
          {/* <p>
            Hello, my name is Idiagbon Saadu Abdulrahman also Known as Olayinka_Dev, and I am a frontend and backend developer with experience in UI/UX design. I am passionate about creating responsive and user-friendly web applications that provide a great user experience.
            As a full-stack developer, I am proficient in languages such as HTML, CSS, JavaScript, Express js, ejs, Mongo Db and Mongoose. I enjoy working on both the frontend and backend of web applications and have experience in developing dynamic web pages and user interfaces that are visually appealing and easy to use.
            In addition to my technical skills, I have experience working as a UI/UX designer, which has given me a keen eye for design and user experience. I strive to create beautiful and intuitive user interfaces that are easy to navigate and use.
            As a freelancer, I have had the opportunity to work with a variety of clients and industries, which has helped me develop strong communication and project management skills. I am committed to delivering high-quality work that meets my clients' needs and exceeds their expectations.
            Thank you for visiting my portfolio website, and I look forward to the opportunity to work with you!
          </p> */}
          <p>Hello, and welcome to my portfolio website!. My name is Idiagbon Saadu Abdulrahman also known as Olayinka_Dev, and I'm a versatile professional Frontend, Backend, and Full-stack developer. I specialize in creating responsive and dynamic websites and web applications using the latest technologies and frameworks. Let me tell you a little bit about myself.</p>
        </div>

        <div className="about-flex">
          <div className="about-image" data-aos='fade-right'>
            <img src={profileimg2} class="img-fluid" alt={profileimg2} />
          </div>
          <div className="about-left" data-aos='fade-left'>
            <h3>Web <span className='about-me-color'>Developer.</span></h3>
            <p className="about-paragraph">
              As a full-stack developer, I am proficient in languages such as HTML, CSS, JavaScript, Express js, ejs, Mongo Db and Mongoose. I enjoy working on both the frontend and backend of web applications and have experience in developing dynamic web pages and user interfaces that are visually appealing and easy to use.
              As a freelancer, I have had the opportunity to work with a variety of clients and industries, which has helped me develop strong communication and project management skills. I am committed to delivering high-quality work that meets my clients' needs and exceeds their expectations.
              Thank you for visiting my portfolio website, and I look forward to the opportunity to work with you!
            </p>
            <div className="about-content">
              <div className="about-info">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 Feb 2003</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+234 9038464244</span></li>
                </ul>
              </div>
              <div className="about-info">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>olayinkaconsult@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p className='about-paragraph'>
              My development philosophy centers on creating efficient and clean code that is both maintainable and scalable.
              I enjoy exploring new technologies and staying up-to-date on the latest trends in web development. I'm always looking for new challenges and opportunities to improve my skills and make a positive impact in the world.
            </p>
          </div>
        </div>
      </div>
    </section> 
    <section id="skills" class="skills section-bg">
      <div class="" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
          <p>These are some of the skills I possess and the programming languages I am proficient in. I am capable of instructing and utilizing these languages in a simple and up-to-date manner. If you require assistance with any of these, please let me know.</p>
        </div>

        <div class="row skills-content">
          <div class="skill-slides">
            <div class="progress">
              <span class="skill">HTML <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
              <div data-aos="fade-right" className="progress-bar" style={{width: "100%"}}></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">CSS & TAILWINDCSS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
              <div data-aos="fade-right" className="progress-bar" style={{width: "90%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-slides">
            <div class="progress">
                <span class="skill">Bootstrap<i class="val">75%</i></span>
                <div class="progress-bar-wrap">
                <div data-aos="fade-right" className="progress-bar" style={{width: "75%"}}></div>
                </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
              <div data-aos="fade-right" className="progress-bar" style={{width: "80%"}}></div>
              </div>
            </div>
          </div>

          <div class="skill-slides">
            <div class="progress">
              <span class="skill">ReactJs & ReactNative<i class="val">90%</i></span>
              <div class="progress-bar-wrap">
              <div data-aos="fade-right" className="progress-bar" style={{width: "90%"}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">NEXTJS <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div data-aos="fade-right" className="progress-bar" style={{width: "85%"}}></div>
              </div>
            </div>

          </div>

          <div class="skill-slides">
            <div class="progress">
              <span class="skill">NODE js & EXPRESS JS<i class="val">80%</i></span>
              <div class="progress-bar-wrap">
              <div data-aos="fade-right" className="progress-bar" style={{width: "80%"}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Mongoose & Moongo DB & PRISMA<i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div data-aos="fade-right" className="progress-bar" style={{width: "75%"}}></div>
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
  
.about{
  width: 100%;
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: var(--sectionbackground);
}
.about-me-color{
  color: var(--herospan);
}
.about-flex{
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.img-fluid{
  width: 596px;
}
.about-left{
  width: 100%;
  display: flex;
  flex-direction: column; 
  gap: 20px;
}
.about h3 {
  font-weight: 700;
  font-size: 26px;
  color: var(--herocolor);
}
.about-content{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.about ul {
  list-style: none;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about-info{
  width: 100%;
}
.about ul li {
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  color: var(--text);
}

.about ul strong {
  margin-right: 10px;
  font-family: "Open Sans", sans-serif;
  color: var(--text);
}

.about ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #0563bb;
  line-height: 0;
}
.about-paragraph{
  color: var(--text);
}
.about p:last-child {
  margin-bottom: 0;
  line-height: 20px;
}
.skills{
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: var(--sectionbackground);

}
.skills-content{
  padding: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.skills .progress {
  width: 100%;
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
}
.skill-slides{
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.skills .progress .skill {
  padding: 10px 0;
  margin: 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: var(--letter);
}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background-color: var(--navlinkbackground);
}

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background: var(--activehover);
}



@media screen and (max-width: 992px) {

  .about{
    padding: 30px 10px;
  }
  .about-flex{
    flex-direction: column;
  }
  .about-content{
    flex-direction: column;
    gap: 20px;
  }
  .img-fluid{
    width: 100%;
  }
  .skills-content{
    gap: 20px;
  }
  .skill-slides{
    flex-direction: column;
    gap: 15px;
  }

}

`

export default About;

