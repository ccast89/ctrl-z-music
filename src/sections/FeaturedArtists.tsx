import { Link } from "react-router";
import { canciones } from "../data/canciones";

function FeaturedArtists() {
  // Sacamos los artistas válidos y evitamos que se repitan
  const artistas = [
    ...new Set(
      canciones
        .filter((cancion) => cancion.id && cancion.artista)
        .map((cancion) => cancion.artista)
    ),
  ];

  // Elegimos 4 artistas al azar
  const artistasAleatorios = [...artistas]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="bg-[#121212] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Artistas destacados
          </h2>

          <p className="text-[#B3B3B3] mt-2">
            Conocé artistas y descubrí nuevos sonidos.
          </p>
        </div>

        {/* ARTISTAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {artistasAleatorios.map((artista) => {
            // Buscamos una canción del artista para usar su imagen
            const cancionArtista = canciones.find(
              (cancion) => cancion.artista === artista
            );

            return (
              <Link
                key={artista}
                to={`/artistas/${encodeURIComponent(artista)}`}
                className="text-center group"
              >
                <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-[#242424] overflow-hidden group-hover:scale-105 transition">
                  <img
                    src={cancionArtista?.imagen}
                    alt={artista}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-lg mt-4">
                  {artista}
                </h3>

                <p className="text-[#B3B3B3] text-sm">
                  Artista
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FeaturedArtists;