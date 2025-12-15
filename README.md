# M-SERIES | Independent Production Platform

Este proyecto es una aplicación web moderna ("Netflix-style") para una productora independiente de mini-series. El objetivo principal es demostrar el uso efectivo de **React Router DOM** para la navegación, junto con animaciones cinemáticas y una arquitectura de contenido escalable.

## 🛠 Tecnologías Utilizadas

- **React 19**: Biblioteca UI principal.
- **Vite**: Build tool y entorno de desarrollo rápido.
- **React Router DOM**: Gestión de rutas y navegación SPA (Single Page Application).
- **Tailwind CSS**: Framework de utilidad para estilizado rápido y diseño responsivo.
- **Framer Motion**: Animaciones complejas y transiciones de página.
- **GSAP**: Animaciones de entrada secuenciales de alto rendimiento.

## 🧭 React Router DOM en el Proyecto

El enrutamiento es el núcleo de esta aplicación, gestionado en `src/App.tsx`.

1.  **`BrowserRouter`**: Envuelve toda la aplicación para habilitar el enrutamiento basado en el historial del navegador.
2.  **`Routes` y `Route`**: Definen el mapeo entre URLs y componentes.
    - `/`: Renderiza `Home` como landing page.
    - `/about`, `/team`, `/productions`, etc.: Renderizan el componente genérico `Page` con contenido específico.
    - `Layout`: Actúa como un _outlet_ padre, manteniendo el `Navbar` persistente en todas las vistas.
3.  **`NavLink`**: Utilizado en el `Navbar`, permite aplicar estilos condicionales (como resaltar la página activa) automáticamente.
4.  **`Link`**: Usado para la navegación simple (ej. clic en el logo).
5.  **`Navigate`**: Maneja redirecciones (ej. rutas no encontradas redirigen al home).

## 🏗 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Home.tsx      # Landing page única
│   ├── Layout.tsx    # Estructura principal con Outlet
│   ├── Navbar.tsx    # Navegación principal
│   ├── PageWrapper.tsx # Contenedor de animaciones
│   └── HeroBackground.tsx # Componente de fondo común
├── pages/
│   └── Page.tsx      # Componente de página genérico
├── constants.ts      # Datos estáticos de todo el sitio
├── types.ts          # Interfaces TypeScript
├── App.tsx           # Configuración de rutas
└── index.css         # Estilos globales y Tailwind
```

## 📦 Refactorización de Contenido (Types & Constants)

Para evitar la repetición de código y facilitar el mantenimiento, el contenido de las páginas se ha desacoplado de la lógica de los componentes.

1.  **`types.ts`**: Define la estructura de los datos.

    ```typescript
    export interface PageContent {
      id: string;
      title: string;
      subtitle: string;
      description?: string;
      backgroundImage: string;
    }
    ```

2.  **`constants.ts`**: Actúa como una "base de datos" local. Aquí se define el texto e imágenes para cada ruta (`home`, `about`, `plans`, etc.).

    - _Beneficio_: Para cambiar un texto o imagen, solo editas este archivo, no tocas los componentes.

3.  **Componente `Page`**: Consume estos datos. En lugar de tener 5 archivos de página (`About.tsx`, `Team.tsx`...), tenemos uno solo (`Page.tsx`) que recibe el objeto de contenido (`PageContent`) como _prop_ y renderiza la UI dinámicamente.

---

**Nota**: Las imágenes se encuentran en la carpeta `public/image` y son servidas directamente por Vite.
