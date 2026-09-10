import { useParams } from "react-router";
import { canciones } from "../data/canciones";
import { Link } from "react-router";

function CancionesGenero() {
  const { genero } = useParams();

  const cancionesDelGenero = canciones.filter(
    (cancion) => cancion.categoria.toLowerCase() === genero,
  );

  if (cancionesDelGenero.length === 0) {
    return (
      <main>
        <h2>Género no encontrado - Error 404</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold capitalize">{genero}</h1>
        <p className="mb-8 text-neutral-400">
          Canciones del género seleccionado
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cancionesDelGenero.map((cancion) => (
            <Link
              key={cancion.id}
              to={`/cancion/${cancion.id}`}
              className="group rounded-xl bg-neutral-900 p-4 transition hover:-translate-y-1 hover:bg-neutral-800"
            >
              <img
                src={cancion.imagen}
                alt={cancion.titulo}
                className="aspect-square w-full rounded-lg object-cover"
              />
              <h2 className="mt-4 text-lg font-semibold group-hover:text-[#1DB954]">
                {cancion.titulo}
              </h2>
              <p className="mt-1 text-sm text-neutral-400">{cancion.artista}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CancionesGenero;
