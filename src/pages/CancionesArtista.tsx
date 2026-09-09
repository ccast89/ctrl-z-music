import { useParams } from "react-router";
import { canciones } from "../data/canciones";

const CancionesArtista = () => {
  const { artista } = useParams();

  const artistaDecodificado = decodeURIComponent(artista || "");

  const cancionesDelArtista = canciones.filter(
    (cancion) =>
      cancion.artista.toLowerCase() === artistaDecodificado.toLowerCase() &&
      cancion.id
  );

  return (
    <main className="min-h-screen bg-[#121212] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Canciones de {artistaDecodificado}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cancionesDelArtista.map((cancion) => (
            <div
              key={cancion.id}
              className="bg-[#242424] rounded-xl p-4"
            >
              <img
                src={cancion.imagen}
                alt={cancion.titulo}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />

              <h2 className="font-bold">
                {cancion.titulo}
              </h2>

              <p className="text-[#B3B3B3] text-sm mt-1">
                {cancion.artista}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CancionesArtista;