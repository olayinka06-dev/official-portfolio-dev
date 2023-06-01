import React, {useEffect} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <Wrapper>
        <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
            <h2>Resume</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
            <div class="first" data-aos="fade-right">
                <h3 class="resume-title">Sumary</h3>
                <div class="resume-item pb-0">
                <h4>Olayinka Dev</h4>
                <p><em>Highly skilled and motivated full stack developer with expertise in frontend and backend development. Experienced in building responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript Node js, and modern frontend frameworks. Strong problem-solving abilities and a passion for creating engaging user experiences</em></p>
                <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>Phone: +234 9038464244</li>
                    <li>Email: olayinkaconsult06@gmail.com</li>
                </ul>
                </div>

                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                <h4>Master of Fine Arts &amp; Graphic Design</h4>
                <h5>2015 - 2016</h5>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                </div>
                <div class="resume-item">
                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                <h5>2010 - 2014</h5>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                </div>
            </div>
            <div class="second" data-aos="fade-left">
                <h3 class="resume-title">Professional Experience</h3>
                <div class="resume-item">
                  <h4>Full Stack Developer</h4>
                  <h5>Mar 2021 - 2022</h5>
                  <p><em>Toshconsultinc Technologies</em></p>
                  <ul>
                    <li>Collaborated with cross-functional teams to build and maintain responsive web applications using React on the frontend and Node.js on the backend.</li>
                    <li>Implemented responsive designs using HTML, CSS, and JavaScript, ensuring optimal user experience across different devices.</li>
                    <li>Optimized website performance and ensured cross-browser compatibility.</li>
                    <li>Integrated APIs and third-party libraries to enhance functionality and improve user experience.</li>
                    <li>Conducted code reviews and implemented best practices for code quality, maintainability, and scalability.</li>
                  </ul>
                </div>
                <div class="resume-item">
                  <h4>Frontend Developer</h4>
                  <h5>2022 - present</h5>
                  <p><em>MSMEs Enterpreneur Nigeria, Kwara state branch</em></p>
                  <ul>
                    <li>Collaborated with cross-functional teams to build and maintain a responsive web application using React.</li>
                    <li>Implemented responsive designs using HTML, CSS, and JavaScript.</li>
                    <li>Optimized website performance and ensured cross-browser compatibility.</li>
                    <li>Integrated APIs and third-party libraries to enhance functionality.</li>
                    <li>Conducted code reviews and implemented best practices for code quality and maintainability.</li>
                  </ul>
                </div>
            </div>
            </div>

        </div>
        </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.resume{
  width: 100%;
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: var(--sectionbackground);
}
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: var(--text);
}

.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid var(--herospan);
  position: relative;
}
.row{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.first, .second{
    width: 100%;
}
p, h3, ul, li{
    color: var(--text);
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: var(--herocolor);
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: #f7f8f9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
}

.resume .resume-item ul li {
  padding-bottom: 10px;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  background-color: var(--mainbody);
  top: 0;
  border: 2px solid var(--herocolor);
}

@media screen and (max-width: 992px) {
  .resume{
    padding: 30px 10px;
  }
    .row{
        flex-direction: column;
    }
}

`
export default Resume;