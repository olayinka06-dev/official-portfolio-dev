import React, {useEffect, useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { BiEnvelope } from 'react-icons/bi';
import { MdCall, MdLocationPin } from 'react-icons/md';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css'

const Contact = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('service_crx3kho', 'template_09ehw19', form.current, 'u2nfu0FS3Hq8iz7Hh')
      .then((result) => {
          console.log(result.text);
          setSuccess("Your message has been sent. Thank you!");
          setError("");
          setLoading(false);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setSuccess("");
          setError("Network Error Message Not Sent!");
          setLoading(false)
      });
  };

  return (
    <Wrapper>
      <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row">

          <div class="first" data-aos="fade-right">
            <div class="info">
              <div class="address">
                <i className='icon'><MdLocationPin/></i>
                <h4>Location:</h4>
                <p>No 11 Allahulateef Street, Isalekoko, Ilorin Kwara State</p>
              </div>

              <div className="email">
                <i className='icon'><BiEnvelope/></i>
                <h4>Email:</h4>
                <p>olayinkaconsult06@gmail.com</p>
              </div>

              <div className="phone">
                <i className='icon'><MdCall/></i>
                <h4>Call:</h4>
                <p>+2349038464244</p>
              </div>

            </div>

          </div>

          <div class="second" data-aos="fade-left">

            <form className="php-email-form" ref={form} onSubmit={sendEmail}>
              <div className="row-two">
                <div className="form-group">
                  <input type="text" name='firstname' className="form-control" placeholder="Your FirstName" required/>
                </div>
                <div className="form-group">
                  <input type="text" name='lastname' className="form-control" placeholder="Your LastName" required />
                </div>
              </div>
              <div classname="form-group">
                <input type="email" name='email' className="form-control" placeholder="Your Email" required/>
              </div>
              <div classname="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div classname="">
                {
                   loading ? (<div className="loading"></div>) : (                
                    <>
                      {error && (<span className="error-message">{error}</span>)}
                      {success && (<span className="sent-message">{success}</span>)}
                    </>
                  )
                }
              </div>
              <div className="btn-group"><button className='cv' type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    </Wrapper>    
  )
}
const Wrapper = styled.section`
.contact{
  width: 100%;
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: var(--sectionbackground);
}
.row{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.row-two{
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
form{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
input{
  padding-left: 7px;
}
input, textarea{
  width: 100%;
  resize: none;
} 
.first{
  flex-grow: 4;
}
.form-group{
  width: 100%;
}
.second{
  margin-top: 15px;
  flex-grow: 9;
}
.form-control{
  border: 1px solid var(--inputborder);
  outline-color: var(--herocolor);
  background-color: var(--navlinkbackground);
  color: var(--text);
}
.contact .info {
  width: 100%;
}

.contact .info i {
  font-size: 20px;
  color: var(--herocolor);;
  float: left;
  width: 44px;
  height: 44px;
  background: #eef7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--herocolor);
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: var(--text);
}

.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}
.icon{
  
}
.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: var(--activehover);
  color: white;
}

.contact form {
  width: 100%;
}

.contact form .form-group {
  padding-bottom: 8px;
}

.error-message {
  color: #fff;
  background: #ed3c0d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  overflow: hidden;
  transition: all 1s ease;
  width: 100%;
  height: 5vh;
}

.sent-message {
  color: #fff;
  background: #18d26e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  overflow: hidden;
  transition: all 1s ease;
  width: 100%;
  height: 5vh;
}
.loading {
  background: #fff;
  text-align: center;
  padding: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
  margin: 0 auto;
}

.contact form input,
.contact form textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
}

.contact form input {
  height: 44px;
}

.contact form textarea {
  padding: 10px 12px;
}

.contact form button[type=submit] {
  background: var(--activehover);
  border: 0;
  padding: 12px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
  opacity: 100%;
  cursor: pointer;
}

.contact form button[type=submit]:hover {
  padding: 12px 49px;
  opacity: 79%;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 950px) {
  .contact{
    padding: 30px 10px;
  }
  .btn-group{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .row{
    flex-direction: column;
  }
  .row-two{
    flex-direction: column;
  }
}
`
export default Contact;