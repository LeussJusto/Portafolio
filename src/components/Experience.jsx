import './Experience.css'

function Experience() {
  const experiences = [
    {
      company: "Glajumedia",
      duration: "4 meses",
      description: "Empresa de desarrollo software especializado en e-commerce para extranjero",
      sections: [
        {
          title: "Backend Developer (Prácticas)",
          tasks: [ 
            "Implementación de validaciones básicas y ajustes en reglas de negocio relacionadas",
            "Corrección de bugs reportados",
            "Implementación de pequeños cambios solicitados por el área administrativa",
            "Documentación básica de endpoints para facilitar la integración con frontend",
            "Participación en reuniones ágiles (Scrum) y seguimiento de tareas asignadas"
          ]
        },
      ]
    }
  ]

  return (
    <section id="experiencia" className="experience">
      <div className="experience-content">
        <div className="experience-header">
          <svg className="briefcase-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <h2 className="experience-title">Experiencia Laboral</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              
              <p className="company-description">{exp.description}</p>
              
              {exp.sections.map((section, sIndex) => (
                <div key={sIndex} className="experience-section">
                  <h4 className="section-title">● {section.title}</h4>
                  <ul className="tasks-list">
                    {section.tasks.map((task, tIndex) => (
                      <li key={tIndex} className="task-item">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
