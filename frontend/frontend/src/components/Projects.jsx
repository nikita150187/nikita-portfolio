const projects = [
  {
    title: "Weather App",
    description: "React app using OpenWeatherMap API",
    image: "/nikita-portfolio/images/weather-App.JPG",
  },
  {
    title: "Card Making Project",
    description: "A creative project on card making.",
    image: "/nikita-portfolio/images/Card-making.JPG",
  },
  {
    title: "Serenity Spa Website",
    description: "A responsive spa website with a booking feature.",
    image: "/nikita-portfolio/images/Spa-project.JPG",
  },
  {
    title: "Typing Game",
    description: "Fast-paced typing game built in React with scoring system.",
    image: "/nikita-portfolio/images/typing-game.JPG",
  },
  {
    title: "Express and MongoDB Project",
    description: "Backend project using Express and MongoDB.",
    image: "/nikita-portfolio/images/Express-and-MongoDB.JPG",
  },
  {
    title: "Frontend Project 1",
    description: "Some description for frontend-1.",
    image: "/nikita-portfolio/images/frontend-1.JPG",
  },
  {
    title: "Book Gallery",
    description: "A gallery website to showcase books.",
    image: "/nikita-portfolio/images/Book-gallery.JPG",
  },
];


const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div style={{ display: 'grid', gap: '1rem' }}>
      {projects.map((project, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

