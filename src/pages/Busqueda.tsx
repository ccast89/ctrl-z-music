import { useState } from "react";
import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import { canciones } from "../data/canciones";

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("");

  const cancionesFiltradas = canciones.filter(
    (cancion) =>
      cancion.id &&
      (cancion.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        cancion.artista.toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-[#121212] px-6 py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">

        {/* TÍTULO */}
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold">
            ¿Qué querés escuchar?
          </h1>

          <p className="mt-3 text-gray-400">
            Buscá tus canciones y artistas favoritos
          </p>
        </div>

        {/* BARRA DE BÚSQUEDA */}
        <div className="mt-10 w-full flex justify-center">
          <SearchBar
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
        </div>

        {/* RESULTADOS */}
        {busqueda.trim() !== "" && (
          <section className="mt-12 w-full">

            <h2 className="mb-8 text-center text-2xl font-bold">
              Resultados de búsqueda
            </h2>

            {cancionesFiltradas.length > 0 ? (
              <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cancionesFiltradas.map((cancion) => (
                  <Link
                    key={cancion.id}
                    to={`/cancion/${cancion.id}`}
                    className="group w-full rounded-xl bg-[#242424] p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#2a2a2a]"
                  >
                    <div className="aspect-square w-full overflow-hidden rounded-lg">
                      <img
                        src={cancion.imagen}
                        alt={cancion.titulo}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-4 truncate text-left text-lg font-bold">
                      {cancion.titulo}
                    </h3>

                    <p className="mt-1 truncate text-left text-sm text-[#B3B3B3]">
                      {cancion.artista}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">
                No encontramos canciones con esa búsqueda.
              </p>
            )}
          </section>
        )}
      </div>
    </main>
  );
};

export default Busqueda;