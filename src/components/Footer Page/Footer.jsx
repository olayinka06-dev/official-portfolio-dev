import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoLogoInstagram } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
        <section id="footer" className='footer' data-aos="fade-up">
            <div class="container">
              <h3>Olayinka_Dev</h3>
              <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
              <div class="social-links">
                <a href={'/'}><i><AiOutlineTwitter/></i></a>
                <a href={'/'}><i><RiFacebookFill/></i></a>
                <a href={'/'}><i><IoLogoInstagram/></i></a>
                <a href={'/'}><i><FaLinkedinIn/></i></a>
              </div>
              <div class="copyright">
                &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
              </div>
              <div class="credits">
                Designed by <a style={{color: "blue", textDecoration: "none"}} href="https://bootstrapmade.com/">Olayinka_Dev</a>
              </div>
            </div>
        </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.footer {
  background: #f7f8f9;
  color: #45505b;
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: var(--sectionbackground);
}

#footer h3 {
  font-size: 36px;
  font-weight: 700;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0 0 15px 0;
  color: var(--herocolor);
}

#footer p {
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
  color: var(--text);
}

#footer .social-links {
  margin: 0 0 40px 0;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  color: var(--herocolor);
  background: #eef7ff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: var(--activehover);
  color: #fff;
  text-decoration: none;
}

#footer .copyright {
  margin: 0 0 5px 0;
  font-family: "Poppins", sans-serif;
  color: var(--text);

}

#footer .credits {
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  color: var(--text);
}
@media screen and (max-width: 992px) {
  .footer{
    padding: 30px 10px;
  }
}
`
export default Footer;