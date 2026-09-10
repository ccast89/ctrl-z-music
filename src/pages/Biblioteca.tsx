import { Link } from "react-router";

const generos = [
  { nombre: "Pop", imagen: "/imagenes/Magic!_-_Rude.png" },
  { nombre: "Trap", imagen: "/imagenes/Trap1.webp" },
  { nombre: "Electro", imagen: "/imagenes/Electro2.jpg" },
  { nombre: "Hard Rock", imagen: "/imagenes/crazyjpg.jpg" },
  { nombre: "Regueton", imagen: "/imagenes/ella_y_yo.jpg" },
];

function Biblioteca() {
  return (
    <div>
      <h1>Biblioteca</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {generos.map((genero) => (
          <Link key={genero.nombre} to={`/generos/${genero.nombre.toLowerCase()}`}>
            <img
              src={genero.imagen}
              alt={genero.nombre}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <p>{genero.nombre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Biblioteca;