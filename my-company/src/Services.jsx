// src/components/Services.jsx
const servicesStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#eef',
    minHeight: '80vh',
  },
  heading: {
    color: '#d9534f',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    maxWidth: '600px',
    margin: '20px auto',
  },
  listItem: {
    backgroundColor: '#fff',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }
};

function Services() {
  return (
    <div style={servicesStyles.container}>
      <h1 style={servicesStyles.heading}>Our Services</h1>
      <ul style={servicesStyles.list}>
        <li style={servicesStyles.listItem}>Technology Consulting</li>
        <li style={servicesStyles.listItem}>Market Analysis</li>
        <li style={servicesStyles.listItem}>Product Development</li>
        <li style={servicesStyles.listItem}>Digital Marketing</li>
      </ul>
    </div>
  );
}

export default Services;