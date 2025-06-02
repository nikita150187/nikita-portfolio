const projects = [

  {
    title: "Weather App",
    description: "React app using OpenWeatherMap API",
    image: "public/images/weather-App.jpg",
  },
  {
    title: "Card Making Project",
    description: "A creative project on card making.",
    image: "/images/Card-making.JPG",
  },
  
  {
    title: "Serenity Spa Website",
    description: "A responsive spa website with a booking feature.",
    image: "public/images/Spa-project.jpg",
  },
  {
    title: "Typing Game",
    description: "Fast-paced typing game built in React with scoring system.",
    image: "public/images/typing-game.jpg",
  },
    {
    title: "Express and MongoDB Project",
    description: "Backend project using Express and MongoDB.",
    image: "public/images/Express-and-mongodb.JPG", // use the renamed filename here
  },
  {
    title: "Frontend Project 1",
    description: "Some description for frontend-1.",
    image: "/images/frontend-1.JPG",
  },
  {
    title: "Book Gallery",
    description: "A gallery website to showcase books.",
    image: "/images/Book-gallery.JPG",
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

