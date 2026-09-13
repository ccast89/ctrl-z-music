import { Link } from "react-router";
import { canciones } from "../data/canciones";

function FeaturedMusic() {
  // Filtramos las canciones que tienen datos válidos
  const cancionesValidas = canciones.filter(
    (cancion) => cancion.id && cancion.titulo && cancion.artista
  );

  // Mezclamos las canciones y elegimos 4 al azar
  const cancionesAleatorias = [...cancionesValidas]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="bg-[#181818] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Música destacada
          </h2>

          <p className="text-[#B3B3B3] mt-2">
            Escuchá algunas de las canciones más destacadas.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cancionesAleatorias.map((cancion) => (
            <Link
              key={cancion.id}
              to={`/cancion/${cancion.id}`}
              className="bg-[#242424] rounded-xl p-4 hover:bg-[#2a2a2a] transition"
            >
              <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                <img
                  src={cancion.imagen}
                  alt={cancion.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-lg truncate">
                {cancion.titulo}
              </h3>

              <p className="text-[#B3B3B3] text-sm mt-1 truncate">
                {cancion.artista}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedMusic;