# Portafolio

Portafolio personal minimalista creado con React + Vite.

## 🚀 Tecnologías

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida
- **CSS3** - Estilos personalizados

## 📋 Características

- ✨ Diseño minimalista y limpio
- 📱 Totalmente responsive
- 🎯 Navegación suave entre secciones
- 💼 Sección de experiencia laboral
- 🎨 Galería de proyectos con carrusel de imágenes
- ⬅️➡️ Navegación con botones izquierda/derecha en cada proyecto
- 📍 Indicadores visuales del carrusel

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir el navegador en `http://localhost:5173`

## 📦 Compilar para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## 🚀 Desplegar en GitHub Pages

### Configuración inicial

1. Crea un repositorio en GitHub llamado `Portafolio` (o el nombre que prefieras)

2. Si el nombre del repositorio es diferente a "Portafolio", actualiza `base` en [vite.config.js](vite.config.js):
```javascript
base: '/NombreDetuRepositorio/',
```

3. Conecta tu repositorio local con GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TuUsuario/Portafolio.git
git push -u origin main
```

### Desplegar

Una vez configurado, simplemente ejecuta:

```bash
npm install  # Solo la primera vez, para instalar gh-pages
npm run deploy
```

Este comando:
1. Compila el proyecto (`npm run build`)
2. Despliega la carpeta `dist/` a la rama `gh-pages`

### Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages** (en el menú lateral)
3. En **Source**, selecciona la rama **gh-pages** y carpeta **/ (root)**
4. Guarda los cambios

Tu portafolio estará disponible en: `https://TuUsuario.github.io/Portafolio/`

### Actualizaciones

Para actualizar tu portafolio publicado:

```bash
npm run deploy
```

## 🎨 Personalización

### 📸 Agregar tus imágenes

Coloca tus imágenes en la carpeta `public/images/`:

```
public/images/
├── profile.jpg              # Tu foto de perfil
└── projects/
    ├── kuskas.jpg           # Primera imagen
    ├── kuskas-2.jpg         # Segunda imagen (opcional)
    ├── kuskas-3.jpg         # Tercera imagen (opcional)
    ├── sistema-gestion.jpg
    ├── sistema-gestion-2.jpg
    ├── nodusbuild.jpg
    ├── viva-colors.jpg
    └── viva-colors-2.jpg
```

Las imágenes se referencian con rutas absolutas: `/images/nombre.jpg`

**Carrusel de imágenes**: Cada proyecto puede tener múltiples imágenes. Edita el array `images` en [Projects.jsx](src/components/Projects.jsx) para agregar más imágenes por proyecto.

### Actualizar información personal

Edita los siguientes archivos para personalizar tu portafolio:

- **Hero.jsx** - Información principal, proyectos destacados
- **Experience.jsx** - Tu experiencia laboral
- **Projects.jsx** - Detalles de tus proyectos y sus imágenes

### Cambiar colores

Los colores principales se pueden modificar en los archivos CSS de cada componente.

## 📝 Estructura del proyecto

```
portafolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Sección principal
│   │   ├── Hero.css
│   │   ├── Experience.jsx    # Experiencia laboral
│   │   ├── Experience.css
│   │   ├── Projects.jsx      # Proyectos
│   │   └── Projects.css
│   ├── App.jsx               # Componente principal
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🌟 Secciones

1. **Hero** - Presentación con foto de perfil, título y lista de proyectos
2. **Experiencia Laboral** - Detalle de tu trayectoria profesional
3. **Proyectos** - Galería de proyectos con descripciones y tecnologías

---

Desarrollado con ❤️ usando React + Vite
