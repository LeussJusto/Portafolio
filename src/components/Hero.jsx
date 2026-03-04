import './Hero.css'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProject = (projectId) => {
    const element = document.getElementById(`project-${projectId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-image">
          <img 
            src={`${import.meta.env.BASE_URL}images/FotoLeo.jpeg`}
            alt="Perfil" 
          />
        </div>
        
        <h1 className="title">Portafolio</h1>
        
        <p className="subtitle">
          Desarrollador Full Stack especializado en crear soluciones innovadoras y escalables
        </p>
        
        <button 
          className="cta-button"
          onClick={() => scrollToSection('experiencia')}
        >
          Ver Experiencia
        </button>
        
        <div className="projects-preview">
          <h3 className="section-subtitle">Mis Proyectos</h3>
          <div className="project-tags">
            <button 
              className="project-tag"
              onClick={() => scrollToProject(1)}
            >
              Gestión de Tareas
            </button>
            <button 
              className="project-tag"
              onClick={() => scrollToProject(2)}
            >
              NodusBuild
            </button>
            <button 
              className="project-tag"
              onClick={() => scrollToProject(3)}
            >
              AirBnb Clone
            </button>
            <button 
              className="project-tag"
              onClick={() => scrollToProject(4)}
            >
              Viva-colors
            </button>
            <button 
              className="project-tag"
              onClick={() => scrollToProject(5)}
            >
              Elixir
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
