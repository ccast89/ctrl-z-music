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
    <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold">Biblioteca</h1>
        <p className="mb-8 text-neutral-400">
          Explorá nuestra música por género
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {generos.map((genero) => (
            <Link
              key={genero.nombre}
              to={`/generos/${genero.nombre.toLowerCase()}`}
              className="group rounded-xl bg-neutral-900 p-4 transition hover:-translate-y-1 hover:bg-neutral-800"
            >
              <img
                src={genero.imagen}
                alt={genero.nombre}
                className="aspect-square w-full rounded-lg object-cover"
              />
              <p className="mt-4 text-lg font-semibold transition group-hover:text-[#1DB954]">
                {genero.nombre}
              </p>
            </Link>
          ))}
        </div>
      </div>
      ´
    </main>
  );
}

export default Biblioteca;
