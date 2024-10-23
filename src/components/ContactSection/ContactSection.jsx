import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./ContactSection.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ContactSection({
  anchorId,
  email,
  mobile,
  country,
  city,
  province,
}) {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const swalAlert = withReactContent(Swal);

    try {
      swalAlert.fire({
        title: "Sending...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          swalAlert.showLoading();
        },
      });

      setSubmitDisabled(true);

      console.log("Email sending...");

      await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, e.target, {
        publicKey: emailJsPublicKey,
      });

      console.log("Message sent!");

      swalAlert.fire({
        title: "Message Sent",
        text: "Thanks! I'll get back to you soon with a thoughtful response.",
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      resetForm();
    } catch (error) {

      swalAlert.fire({
        title: "Message Failed",
        text: "Sorry there was a problem while sending email. Please try again later.",
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      console.error("Failed to send the message...", error.text);
    } finally {
      setSubmitDisabled(false);
    }
  }

  return (
    <section id={anchorId}>
      <div className="contact">
        <div>
          <h2 className="sub-header">Leave me a message</h2>
          <div className="message-me">
            <form onSubmit={handleSubmit} method="post">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  required
                  id="name"
                  name="user_name"
                  autoComplete="off"
                  value={formData.name}
                  maxLength="60"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                  name="user_email"
                  maxLength="60"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  required
                  autoComplete="off"
                  name="user_message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" disabled={submitDisabled}>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div>
          <h2 className="sub-header">Contact Information</h2>
          <div className="info">
            <div>
              <FontAwesomeIcon className="icon" icon={faMap} />
              <div>
                <span>Country:</span>
                <span>{country}</span>
              </div>
              <div>
                <span>Municipality:</span>
                <span>{city}</span>
              </div>
              <div>
                <span>Province:</span>
                <span>{province}</span>
              </div>
            </div>
          </div>
          <div className="info">
            <div>
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <div>
                <span>Email:</span>
                <a target="_blank" rel="noopener" href={`mailto:${email}`}>
                  {email}
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
              <div>
                <span>Mobile:</span>
                <a target="_blank" rel="noopener" href={`tel:${mobile}`}>
                  {mobile}
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
