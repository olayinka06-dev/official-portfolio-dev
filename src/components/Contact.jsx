import React from 'react'
import { BiEnvelope } from 'react-icons/bi';
import { MdCall, MdLocationPin } from 'react-icons/md';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row">

          <div class="first">
            <div class="info">
              <div class="address">
                <i className='icon'><MdLocationPin/></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className='icon'><BiEnvelope/></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className='icon'><MdCall/></i>name
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div class="second">

            <form action="" className="php-email-form">
              <div className="row-two">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" required/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div classname="form-group">
                <input type="text" className="form-control" placeholder="Subject" required/>
              </div>
              <div classname="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div classname="">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    </Wrapper>    
  )
}
const Wrapper = styled.section`
 
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
  border: 1px solid rgb(206,212,218);
  outline-color: lime;
}
.contact .info {
  width: 100%;
  background: #fff;
}

.contact .info i {
  font-size: 20px;
  color: rgb(49,211,92);;
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
  color: #45505b;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #728394;
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
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%) );
  color: white;
}

.contact .php-email-form {
  width: 100%;
  background: #fff;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type=submit] {
  background: #0563bb;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: #0678e3;
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

`
export default Contact;