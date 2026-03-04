# Estructura de Imágenes

Coloca tus imágenes aquí siguiendo esta estructura:

```
public/
└── images/
    ├── profile.jpg              # Tu foto de perfil
    └── projects/
        ├── kuskas.jpg           # Primera imagen de Kuskas
        ├── kuskas-2.jpg         # Segunda imagen de Kuskas
        ├── kuskas-3.jpg         # Tercera imagen de Kuskas
        ├── sistema-gestion.jpg  # Primera imagen del Sistema
        ├── sistema-gestion-2.jpg
        ├── nodusbuild.jpg
        ├── viva-colors.jpg
        └── viva-colors-2.jpg
```

## 📝 Notas:

- Las imágenes en `public/` se copian tal cual al build
- Se acceden con rutas absolutas desde la raíz: `/images/nombre.jpg`
- Formatos recomendados: JPG, PNG, WEBP
- Mantén las imágenes optimizadas (peso < 500KB por imagen)
- **Carrusel**: Cada proyecto puede tener múltiples imágenes con navegación izquierda/derecha
- Nombra las imágenes adicionales con sufijos: `-2`, `-3`, etc.
