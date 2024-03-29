import { useContext, useRef, useState } from "react";
import "./Contact.css";
import contactImg from "./img/get.jpg";
import emailjs from "emailjs-com";
function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3dp3pzc",
        "template_r8x546c",
        formRef.current,
        "equqDflciW6heWiPl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Be Always In Touch.</h1>
              <p className="hire__text white">
                I am available for work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+254 741 876 222</strong> or email{" "}
                <strong>otienotilen@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <form ref={formRef} onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                  name="user_name"
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email *"
                  name="user_email"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                  name="user_subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
                {done && "Thank you..."}
              </form>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
