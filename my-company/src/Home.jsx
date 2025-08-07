// src/components/Home.jsx
const homeStyles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#333',
    fontSize: '3em',
  },
  paragraph: {
    color: '#666',
    fontSize: '1.2em',
    maxWidth: '600px',
  }
};

function Home() {
  return (
    <div style={homeStyles.container}>
      <h1 style={homeStyles.heading}>Welcome to Our Company</h1>
      <p style={homeStyles.paragraph}>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;