# CTRL-Z Music

CTRL-Z Music es una aplicación web de streaming de música desarrollada como proyecto grupal utilizando React y TypeScript.

La aplicación permite explorar canciones por género y artista, buscar música, consultar el detalle de cada canción y crear playlists personales. También cuenta con un sistema de registro e inicio de sesión, rutas privadas y administración de usuarios.

## 🚀 Funcionalidades

- Registro e inicio de sesión de usuarios.
- Manejo de sesión mediante Context y localStorage.
- Rutas públicas y privadas.
- Control de acceso según el rol del usuario.
- Exploración de canciones.
- Búsqueda de canciones.
- Exploración por género musical.
- Exploración por artista.
- Vista de detalle de cada canción.
- Creación de playlists personales.
- Agregar y quitar canciones de una playlist.
- Eliminación de playlists.
- Playlists asociadas a cada usuario.
- Persistencia de playlists mediante localStorage.
- Reproductor de canciones dentro de las playlists.
- Navegación mediante React Router.
- Diseño responsive.

## 🛠️ Tecnologías utilizadas

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- pnpm
- Git
- GitHub
- localStorage

## 📂 Secciones principales

La aplicación cuenta con diferentes páginas y secciones:

- **Inicio:** página principal de CTRL-Z Music.
- **Biblioteca:** permite explorar la música disponible por género.
- **Búsqueda:** permite buscar canciones.
- **Detalle de canción:** muestra la información y reproducción de una canción seleccionada.
- **Artistas:** permite consultar canciones según el artista.
- **Géneros:** muestra las canciones pertenecientes a un género determinado.
- **Playlists:** permite a los usuarios registrados crear y administrar sus propias playlists.
- **Administración:** sección protegida para usuarios con rol administrador.
- **Acerca de Nosotros:** información sobre el proyecto y el equipo de desarrollo.
- **Login y Registro:** permiten crear una cuenta e iniciar sesión.

## 🔐 Autenticación

El proyecto utiliza Context API para compartir la información de autenticación entre los distintos componentes de la aplicación.

El contexto permite acceder al usuario actual y a las funciones de inicio y cierre de sesión.

La información necesaria para el funcionamiento del proyecto se almacena mediante `localStorage`.

También se utilizan rutas privadas para controlar el acceso a determinadas páginas. Por ejemplo, para acceder a las playlists es necesario haber iniciado sesión.

La sección de administración cuenta además con control de acceso según el rol del usuario.

## 🎧 Playlists

Cada usuario puede crear sus propias playlists y agregar canciones disponibles en la aplicación.

Las playlists se relacionan con el usuario que las creó y se almacenan en `localStorage`, permitiendo conservarlas al recargar la página.

Desde una playlist también es posible:

- Reproducir sus canciones.
- Pasar a la canción siguiente.
- Volver a la canción anterior.
- Quitar canciones.
- Eliminar la playlist.

## 💻 Instalación

Para ejecutar el proyecto de manera local:

1. Clonar el repositorio:

```bash
git clone https://github.com/ccast89/ctrl-z-music.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd ctrl-z-music
```

3. Instalar las dependencias:

```bash
pnpm install
```

4. Iniciar el servidor de desarrollo:

```bash
pnpm run dev
```

5. Abrir en el navegador la dirección indicada por Vite.

## 👥 Equipo de desarrollo

- **Carla Castellano** — Líder de equipo / Desarrolladora
- **Álvaro Cedrón** — Desarrollador Frontend / Diseñador
- **José Galarzo** — Desarrollador Frontend
- **Esteban Vellido** — Desarrollador Frontend

## 📚 Proyecto académico

CTRL-Z Music fue desarrollado como proyecto grupal de RollingCode School, con el objetivo de aplicar los conocimientos adquiridos sobre desarrollo web con React, TypeScript, manejo de rutas, componentes, Context API, autenticación, persistencia de datos y trabajo colaborativo con Git y GitHub.
