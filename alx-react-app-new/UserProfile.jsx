const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      padding: '1.5rem',
      margin: '1rem auto',
      maxWidth: '600px',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      marginBottom: '1rem'
    }}>
      <h2 style={{ color: '#2a64ad', fontSize: '1.875rem', marginBottom: '0.75rem' }}>{props.name}</h2>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#4a5568' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#1a202c' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#4a5568' }}>
        Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span>
      </p>
    </div>
  );
};
