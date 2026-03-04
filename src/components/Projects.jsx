import { useState } from 'react'
import './Projects.css'

function Projects() {
  // Helper para construir rutas de imágenes con BASE_URL
  const getImageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  const projects = [


    {
      id: 1,
      label: "Proyecto 01",
      name: "Sistema de Gestión de Tareas en Campo",
      subtitle: "Sistema que gestiona tareas en vivo con asignacion y reporte",
      description: "Multiplataforma escritorio y movil para una gestion en campo y reporte detallados, asignando tareas y eventos en tiempo real con notificaciones y seguimiento de progreso.",
      technologies: ["React", "Node.js", "JavaScript", "mysql", "Android Studio", "kotlin"],
      link: "https://www.canva.com/design/DAGt9wGVnh8/ztt8ivSv4xz1MkJrwKkAgA/watch?utm_content=DAGt9wGVnh8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5c9b2f3ea2",
      repos: {
        back: "https://github.com/LeussJusto/Comunidad.git",
        movil: "https://github.com/LeussJusto/Comunidad-Mobil.git",
        escritorio: "https://github.com/LeussJusto/Comunidad-Desktop.git"
      },
      images: [
        "/images/projects/comunidad-estructura.png",
        "/images/projects/comunidad-login.png",
        "/images/projects/comunidadmobil-login.jpeg",
        "/images/projects/comunidad-inicio.png",
        "/images/projects/comunidad-notificaciones.png",
        "/images/projects/comunidad-reporte.png",
        "/images/projects/comunidadmobile-inicio.jpeg",
        "/images/projects/comunidadmobile-evento.jpeg",
        "/images/projects/comunidadmobil-tarea.jpeg",
      ]
    },
    {
      id: 2,
      label: "Proyecto 02",
      name: "NodusBuild",
      subtitle: "Plataforma Colaborativo para subir archivos y ver los progresos de los informes a tiempo real",
      description: "Plataforma para subir evidencia de avences de proyectos, con seguimiento en tiempo real y colaboración entre equipos, permitiendo una gestión eficiente de tareas y recursos.",
      technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Redis"],
      link: "https://www.canva.com/design/DAHC3ELV918/baSrlR0vVOOmKYZRrvKl0A/view?utm_content=DAHC3ELV918&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7f7f77f1f5",
      repos: {
        front: "https://github.com/Egolden20/FrontNodusBuild.git",
        back: "https://github.com/LeussJusto/Back-NodusBuild.git"
      },
      images: [
        "/images/projects/nodus-estructurafinal.png",
        "/images/projects/nodus-login.jpeg",
        "/images/projects/nodus-inicio.jpeg",
        "/images/projects/nodus-proyectos.jpeg",
        "/images/projects/nodus-tareas.jpeg",
        "/images/projects/nodus-registro.jpeg",
        "/images/projects/nodus-mensajes.jpeg", 
      ]
    },
    {
      id: 3,
      label: "Proyecto 03",
      name: "AirBnb Clone",
      subtitle: "Backend de plataforma de alquiler de alojamientos",
      description: "Planificacion de Diseño Backend usando Springboot con java, para reservas de alojamiento para inquilino y alquiler.",
      technologies: ["Springboot", "Java", "Mysql", "Docker"],
      repo: "https://github.com/LeussJusto/WebAirbnb.git",
      images: [
        "/images/projects/air-estructura.png",
        "/images/projects/air-config.png",
        "/images/projects/air-login.png",
        "/images/projects/air-model.png",
        "/images/projects/air-dto.png",
        "/images/projects/air-docker.png"

      ]
    },
    {
      id: 4,
      label: "Proyecto 04",
      name: "Viva-colors",
      subtitle: "Backend de un Dashboard de una ferreteria",
      description: "planificacion de Diseño Backend para gestion de productos, clientes y ventas de una ferreteria usando graphql con nodejs y mongodb",
      technologies: ["Node.js", "JavaScript", "GraphQL", "MongoDB"],
      repo: "https://github.com/LeussJusto/VivaColorsBack.git",
      images: [
        "/images/projects/viva-estructura.png",
        "/images/projects/viva-service.png",
        "/images/projects/viva-entities.png",
        "/images/projects/viva-repositorio.png",
        "/images/projects/viva-model.png",
        "/images/projects/viva-resolver.png",
        "/images/projects/viva-schema.png"
      ]
    },
    {
      id: 5,
      label: "Proyecto 04",
      name: "Elixir",
      subtitle: "Backend de un ejercicio para implementar Chanel con kafka con graphql",
      description: "Diseño Backend para implementar un canal de comunicación en tiempo real usando Elixir, Valkey, Redpanda y GraphQL, permitiendo la transmisión eficiente de datos entre clientes y servidores con alta concurrencia.",
      technologies: ["Phoenix","Elixir", "Valkey", "Redpanda", "GraphQL"],
      link: "https://www.canva.com/design/DAHC8G2YnbY/R68IRaRP4F1JkVPDDf7orQ/view?utm_content=DAHC8G2YnbY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1dec9cffbb",
      repo: "https://github.com/LeussJusto/Fractal-Test.git",
      images: [
        "/images/projects/elixir-estructura.png",
        "/images/projects/elixir-schemauser.png",
        "/images/projects/elixir-serviceuser.png",
        "/images/projects/elxir-cache.png",
        "/images/projects/elixir-broadcasters.png",
        "/images/projects/elixir-publishers.png",
        "/images/projects/elixir-canal.png",
        "/images/projects/elixir-resolver.png",
        "/images/projects/elixir-schema.png",
        "/images/projects/elixir-test.png"

      ]
    },
    /*
        {
      id: 5,
      label: "Proyecto 05",
      name: "Kuskas",
      subtitle: "Herramienta Colaborativa de Gestión de Proyectos",
      description: "Plataforma web para gestión visual de tareas en equipo con tableros compartidos, etiquetas, comentarios y notificaciones en tiempo real.",
      technologies: ["React", "TypeScript", "Prisma"],
      link: "https://youtube.com",
      repo: "https://github.com",
      images: [
        "/images/projects/Kuska-Login.png",
        "/images/projects/Kuska-Estructura.png",
        "/images/projects/Kuska-Swagger.png"
      ]
    },
    */
  ]

  // Estado para controlar el índice de imagen actual de cada proyecto
  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.reduce((acc, project) => {
      acc[project.id] = 0
      return acc
    }, {})
  )

  // Estado para controlar el modal de repositorios
  const [activeModal, setActiveModal] = useState(null)

  const nextImage = (projectId, imagesLength) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % imagesLength
    }))
  }

  const prevImage = (projectId, imagesLength) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + imagesLength) % imagesLength
    }))
  }

  return (
    <section id="proyectos" className="projects">
      <div className="projects-content">
        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              id={`project-${project.id}`}
              className={`project-card ${index % 2 === 0 ? 'reverse' : ''}`}
            >
              <div className="project-image-container contain-size">
                <img 
                  src={getImageUrl(project.images[currentImageIndex[project.id]])}
                  alt={`${project.name} - Imagen ${currentImageIndex[project.id] + 1}`}
                  className="project-image"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button 
                      className="carousel-button carousel-button-prev"
                      onClick={() => prevImage(project.id, project.images.length)}
                      aria-label="Imagen anterior"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    
                    <button 
                      className="carousel-button carousel-button-next"
                      onClick={() => nextImage(project.id, project.images.length)}
                      aria-label="Imagen siguiente"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    
                    <div className="carousel-indicators">
                      {project.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          className={`carousel-indicator ${imgIndex === currentImageIndex[project.id] ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(prev => ({
                            ...prev,
                            [project.id]: imgIndex
                          }))}
                          aria-label={`Ir a imagen ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="project-info">
                <span className="project-label">{project.label}</span>
                <h3 className="project-name">{project.name}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      Ver video
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  
                  {/* Repositorios múltiples con modal */}
                  {project.repos && (
                    <>
                      <button 
                        onClick={() => setActiveModal(project.id)}
                        className="project-link project-link-secondary"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Repositorio
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      
                      {/* Modal de selección */}
                      {activeModal === project.id && (
                        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
                          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setActiveModal(null)}>
                              &times;
                            </button>
                            <h3 className="modal-title">Selecciona el repositorio</h3>
                            <div className="modal-buttons">
                              {project.repos.back && (
                                <a 
                                  href={project.repos.back} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="modal-button"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                  </svg>
                                  Backend
                                </a>
                              )}
                              {project.repos.front && (
                                <a 
                                  href={project.repos.front} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="modal-button"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                  </svg>
                                  Frontend
                                </a>
                              )}
                              {project.repos.movil && (
                                <a 
                                  href={project.repos.movil} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="modal-button"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                  </svg>
                                  Móvil
                                </a>
                              )}
                              {project.repos.escritorio && (
                                <a 
                                  href={project.repos.escritorio} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="modal-button"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                  </svg>
                                  Escritorio
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  
                  {/* Repositorio normal */}
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link project-link-secondary"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Repositorio
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
