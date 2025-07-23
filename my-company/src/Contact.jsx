// src/components/Contact.jsx
import { useState } from 'react';

const contactStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: '#5cb85c',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    marginTop: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#5cb85c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div style={contactStyles.container}>
      <h1 style={contactStyles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={contactStyles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={contactStyles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={contactStyles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...contactStyles.input, minHeight: '100px' }}
          required
        />
        <button type="submit" style={contactStyles.button}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;