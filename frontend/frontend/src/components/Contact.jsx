const Contact = () => (
  <section id="contact" style={{ padding: '3rem 1rem', backgroundColor: '#f9f9f9' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Me</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        You can reach me directly at:
      </p>
      <a
        href=" nikitanandumore@gmail.com"
        style={{
          fontSize: '1.2rem',
          color: '#007acc',
          textDecoration: 'none',
          fontWeight: 'bold',
          border: '2px solid #007acc',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          display: 'inline-block',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#007acc';
          e.target.style.color = '#fff';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '';
          e.target.style.color = '#007acc';
        }}
      >
        nikitanandumore@gmail.com
      </a>
    </div>
  </section>
);

export default Contact;
