import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./ContactSection.css";
import { useState } from "react";

export default function ContactSection({
  anchorId,
  email,
  mobile,
  country,
  city,
  province,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      subject: "",
      message: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    resetForm();
  }

  return (
    <section id={anchorId}>
      <div className="contact">
        <div>
          <h2 className="sub-header">Message me!</h2>
          <div className="message-me">
            <form onSubmit={handleSubmit} method="post">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  required
                  id="name"
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
                  maxLength="60"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  autoComplete="off"
                  value={formData.subject}
                  maxLength="100"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  name=""
                  id="message"
                  required
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
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
