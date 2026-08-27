import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const projects = [
  {
    id: 1,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays live weather information using a public API.",
    technologies: ["React", "CSS", "API"],
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "A simple and responsive notes application for creating and managing notes.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Personal Profile",
    description:
      "A clean personal profile card built with semantic HTML and responsive CSS.",
    technologies: ["HTML", "CSS"],
  },
  {
    id: 4,
    title: "Pricing Section",
    description:
      "A responsive pricing section created using modern CSS Flexbox and Grid.",
    technologies: ["HTML", "CSS", "Flexbox", "Grid"],
  },
];
function Home() {
  return (
    <main className="page home">
      <section className="hero">
        <div>
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>
          <h1>
            Hi, I'm <span>Noor Fatima</span>
          </h1>
          <h2>Frontend Developer</h2>

          <p className="hero-text">
            I create clean, responsive and user-friendly websites using
            modern web technologies.
          </p>

          <div className="buttons">
            <Link to="/projects" className="btn">
              View My Projects
            </Link>

            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>

        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Bootstrap</div>
          <div>GitHub</div>
        </div>
      </section>
    </main>
  );
}
function Projects() {
  return (
    <main className="page">
      <section className="section">
        <p className="small-title">MY WORK</p>
        <h1>Projects</h1>
        <p className="section-intro">
          Here are some of the projects I have created while learning and
          practicing web development.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-number">
                0{project.id}
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
function About() {
  return (
    <main className="page">
      <section className="section about">
        <p className="small-title">GET TO KNOW ME</p>
        <h1>About Me</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>I'm a passionate web developer.</h2>

            <p>
              I'm Noor Fatima, a BS Information Technology student with an
              interest in frontend development and modern web technologies.
            </p>

            <p>
              I enjoy creating responsive websites and learning new
              technologies by building practical projects.
            </p>

            <p>
              My goal is to continue improving my development skills and
              create websites that are simple, useful and visually appealing.
            </p>
          </div>

          <div className="about-box">
            <h3>Education</h3>
            <p>BS Information Technology</p>
            <p>2024 - 2028</p>

            <h3>Focus</h3>
            <p>Frontend Development</p>

            <h3>Languages</h3>
            <p>Urdu • English</p>
          </div>
        </div>
      </section>
    </main>
  );
}
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSuccess("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="page">
      <section className="section contact-section">
        <p className="small-title">GET IN TOUCH</p>
        <h1>Contact Me</h1>

        <p className="section-intro">
          Have a question or want to work together? Send me a message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}

          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <small>{errors.message}</small>}

          <button type="submit" className="btn">
            Send Message
          </button>

          {success && <p className="success">{success}</p>}
        </form>
      </section>
    </main>
  );
}


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;