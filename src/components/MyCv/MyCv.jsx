import React from "react";
import styled from "styled-components";

const MyCv = () => {
  return (
    <Wrapper>
      <main>
        <div class="head">
          <h1>My CV</h1>
        </div>
        <header>
          <h1>Idiagbon Saadu Abdulrahman</h1>
          <h2>Frontend Developer</h2>
        </header>

        <section>
          <h2>Summary</h2>
          <p>
            Highly skilled and motivated frontend developer with 1 year of
            experience in building responsive and user-friendly web
            applications. Proficient in HTML, CSS, JavaScript, and modern
            frontend frameworks. Strong problem-solving abilities and a passion
            for creating engaging user experiences.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <ul>
            <li>MERN Stack Web Developer</li>
            Toshconsult Technologies Inc
          </ul>
          <ul>
            <li>Senior Secondary School Certificate</li>
            University of Ilorin Secondary School, Ilorin
          </ul>
        </section>

        <section>
          <h2>Work Experience</h2>
          <article>
            <h3>
              {" "}
              Frontend Developer | Toshconsultinc Technologies | Mar 2021 -
              Present
            </h3>
            <ul>
              <li>
                Collaborated with cross-functional teams to build and maintain a
                responsive web application using React.
              </li>
              <li>
                Implemented responsive designs using HTML, CSS, and JavaScript.
              </li>
              <li>
                Optimized website performance and ensured cross-browser
                compatibility.
              </li>
              <li>
                Integrated APIs and third-party libraries to enhance
                functionality.
              </li>
              <li>
                Conducted code reviews and implemented best practices for code
                quality and maintainability.
              </li>
            </ul>
          </article>
          <article>
            <h3>
              Full Stack Developer | Toshconsultinc Technologies | Mar 2021 -
              Present
            </h3>
            <ul>
              <li>
                Collaborated with cross-functional teams to build and maintain
                responsive web applications using React on the frontend and
                Node.js on the backend.
              </li>
              <li>
                Implemented responsive designs using HTML, CSS, and JavaScript,
                ensuring optimal user experience across different devices.
              </li>
              <li>
                Optimized website performance and ensured cross-browser
                compatibility.
              </li>
              <li>
                Integrated APIs and third-party libraries to enhance
                functionality and improve user experience.
              </li>
              <li>
                Conducted code reviews and implemented best practices for code
                quality, maintainability, and scalability.
              </li>
            </ul>
          </article>
          <article>
            <h3>
              Backend Developer | Toshconsultinc Technologies | Mar 2021 -
              Present
            </h3>
            <ul>
              <li>
                Developed and maintained backend systems using Node.js, Express,
                and MongoDB.
              </li>
              <li>
                Designed and implemented RESTful APIs for seamless communication
                between frontend and backend.
              </li>
              <li>
                Managed databases and performed efficient data querying and
                manipulation.
              </li>
              <li>
                Implemented security measures and authentication mechanisms for
                user data protection.
              </li>
              <li>
                Collaborated with frontend developers to ensure smooth
                integration of frontend and backend components.
              </li>
            </ul>
          </article>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>Proficient in HTML5, CSS3, JavaScript</li>
            <li>Experience with frontend frameworks such as React</li>
            <li>Responsive web design and mobile-first development</li>
            <li>CSS preprocessors like Sass</li>
            <li>Version control with Git</li>
            <li>Problem-solving and debugging skills</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <article>
            <h3>Weather App</h3>
            <p>Description: Amaizing Weather Website Built with Weather Api</p>
            <p>
              Live URL:{" "}
              <a href="https://horlly-weather-app.netlify.app">Link</a>
            </p>
          </article>

          <article>
            <h3>Portfolio Website</h3>
            <p>
              Description: Built a personal portfolio website to showcase
              frontend development projects and skills, demonstrating
              proficiency in HTML, CSS, JavaScript and React
            </p>
            <p>
              Live Url:{" "}
              <a href="https://olayinka-dev-portfolio.netlify.app/">Link</a>
            </p>
          </article>

          <article>
            <h3>Url_Shortener Website</h3>
            <p>Description: A responsive shortening url website with Api</p>
            <p>
              Live URL:{" "}
              <a href="https://horlly-url-shortener.netlify.app">Link</a>
            </p>
          </article>

          <article>
            <h3>Dictionary Website</h3>
            <p>
              Description: A Functioning Dictionary App Bult with Dictionary Api
            </p>
            <p>
              Live URL: <a href="https://dictionary-app-1.netlify.app/">Link</a>
            </p>
          </article>
        </section>

        <section>
          <h2>Achievements and Awards</h2>
          <ul>
            <li>
              Received the "Outstanding Contribution" award for exceptional
              performance and dedication in frontend development at
              Toshconsultinc Company.
            </li>
          </ul>
        </section>

        <section>
          <h2>Languages</h2>
          <ul>
            <li>English</li>
            <li>Yoruba</li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <li> Phone: +234 9038464244</li>
          <li> Email: olayinkaconsult06@gmail.com</li>
          <li> LinkedIn: olayinka dev</li>
        </section>

        <section>
          <h2>My Portfolio Website</h2>
          <p>
            Click to view my Portfolio Website:{" "}
            <a href="https://olayinka-dev-portfolio.netlify.app/">Click</a>
          </p>
        </section>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  main {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  section,
  article,
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  header {
    width: 500px;
    border-top: 1px solid hsl(136, 65%, 51%);
    border-left: 1px solid hsl(136, 65%, 51%);
    border-bottom: 1px solid hsl(192, 70%, 51%);
    border-right: 1px solid hsl(192, 70%, 51%);
    padding-left: 10px;
    margin: 0 auto;
    padding: 20px;
  }
  .head h1 {
    color: hsl(192, 70%, 51%);
    animation: animate 2s linear infinite;
  }
  @keyframes animate {
    0% {
      color: hsl(136, 65%, 51%);
    }
    100% {
      color: hsl(192, 70%, 51%);
    }
  }
  h1 {
    font-size: 32px;
    margin: 0;
    color: #333;
    position: relative;
  }

  h2 {
    font-size: 22px;
    margin: 5px 0;
    color: hsl(136, 65%, 51%);
    position: relative;
  }
  h2::after {
    content: "";
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: linear-gradient(
      to right,
      hsl(136, 65%, 51%),
      hsl(192, 70%, 51%)
    );
    bottom: -5%;
    left: calc(1% - 8px);
  }

  p {
    margin: 5px 0;
    line-height: 1.5;
    color: #555;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  article {
    margin-bottom: 30px;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 950px) {
    header {
      width: 100%;
    }
    h2::after {
      left: calc(1% - 1px);
    }
  }
`;
export default MyCv;
