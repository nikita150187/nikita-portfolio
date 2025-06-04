const SocialLinks = () => (
  <section id="social-links" style={{ padding: '2rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Connect with Me</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <a
        href="https://github.com/nikita150187"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#333',
          textDecoration: 'none',
          fontSize: '1.2rem',
          border: '2px solid #333',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#333', e.target.style.color = '#fff')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '', e.target.style.color = '#333')}
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/nikita-taware-702063240"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#0077b5',
          textDecoration: 'none',
          fontSize: '1.2rem',
          border: '2px solid #0077b5',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0077b5', e.target.style.color = '#fff')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '', e.target.style.color = '#0077b5')}
      >
        LinkedIn
      </a>
    </div>
  </section>
);

export default SocialLinks;
