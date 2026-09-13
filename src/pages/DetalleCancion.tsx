import { useParams } from "react-router";
import { canciones } from "../data/canciones";

function DetalleCancion() {
  const { id } = useParams();
  const cancionEncontrada = canciones.find((cancion) => cancion.id === id);

  if (cancionEncontrada) {
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold">Detalle</h1>
          <div className="rounded-xl bg-neutral-900 p-6 sm:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <img
                src={cancionEncontrada.imagen}
                className="w-full max-w-64 aspect-square object-cover rounded-xl"
              />

              <div className="flex-1">
                <p className="mb-2 text-sm text-neutral-500">
                  Código de la canción: {id}
                </p>
                <h2 className="mb-2 text-3xl font-bold">
                  Título: {cancionEncontrada.titulo}
                </h2>
                <p className="mb-4 text-xl text-[#1DB954]">
                  Artista: {cancionEncontrada.artista}
                </p>
                <div className="space-y-2 text-neutral-300">
                  <p>Categoria: {cancionEncontrada.categoria}</p>
                  <p>Duración: {cancionEncontrada.duracion}</p>
                </div>
              </div>
            </div>
            <audio
              src={cancionEncontrada.audio}
              controls
              className="w-full mt-2"
            ></audio>
          </div>
        </div>
      </main>
    );
  } else {
    return <h2>Página no encontrada - Error 404</h2>;
  }
}
export default DetalleCancion;
