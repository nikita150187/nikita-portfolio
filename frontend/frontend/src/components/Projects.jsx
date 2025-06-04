const projects = [
  {
    title: "Weather App",
    description:
      "A dynamic weather application built using React and the OpenWeatherMap API. It fetches real-time weather data and displays it with a clean and responsive UI.",
    image: "/nikita-portfolio/images/weather-App.JPG",
  },
  {
    title: "Card Making Project",
    description:
      "Creative card design using HTML, CSS, and JavaScript. Focused on layout, color, and interactivity.",
    image: "/nikita-portfolio/images/Card-making.JPG",
  },
  {
    title: "Serenity Spa Website",
    description:
      "A responsive website for a fictional spa, with booking and service pages using modern web design techniques.",
    image: "/nikita-portfolio/images/Spa-project.JPG",
  },
  {
    title: "Typing Game",
    description:
      "Fun typing speed game made with React, featuring timers, score logic, and real-time feedback.",
    image: "/nikita-portfolio/images/typing-game.JPG",
  },
  {
    title: "Express and MongoDB Project",
    description:
      "Backend CRUD app using Express and MongoDB. Demonstrates routing, database integration, and API structure.",
    image: "/nikita-portfolio/images/Express-and-MongoDB.JPG",
  },
  {
    title: "Frontend Project 1",
    description:
      "Responsive landing page using modern CSS and clean layout practices.",
    image: "/nikita-portfolio/images/frontend-1.JPG",
  },
  {
    title: "Book Gallery",
    description:
      "A visual gallery of books built using JavaScript and CSS Grid with filtering options.",
    image: "/nikita-portfolio/images/Book-gallery.JPG",
  },
  {
  title: "Car Selling App",
  description: "A visually engaging React UI for a car dealership featuring luxury Lamborghini models. This project uses modern card design, flexbox layout, and pricing display. The interface is fully responsive and designed for e-commerce interaction. Built using React and styled with CSS and JavaScript.",
  image: "/nikita-portfolio/images/selling-cars-app.JPG", 
  
}

];

const Projects = () => (
  <section id="projects" style={{ padding: '4rem 1rem', backgroundColor: '#f5f7fa' }}>
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>My Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '16px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ fontSize: '1.3rem', color: '#222', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
