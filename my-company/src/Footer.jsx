// src/components/Footer.jsx
const footerStyles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 20px',
    position: 'sticky',
    bottom: '0',
    width: '100%',
  }
};

function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;