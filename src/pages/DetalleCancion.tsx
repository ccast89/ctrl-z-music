import { useParams } from "react-router";
import { canciones } from "../data/canciones";


function DetalleCancion() {
  const { id } = useParams();
  const cancionEncontrada = canciones.find((cancion) => cancion.id === id);

  if (cancionEncontrada) {
    return (
      <main style={{ color: "white", padding: "40px", backgroundColor: "#0c0c0c" }}>
        <h1>Detalle</h1>
        <p>Código de la canción: {id}</p>
        <p>Título: {cancionEncontrada.titulo}</p>
        <p>Artista: {cancionEncontrada.artista}</p>
        <p>Categoria: {cancionEncontrada.categoria}</p>
        <p>Duración: {cancionEncontrada.duracion}</p>
        <img src={cancionEncontrada.imagen} className="w-40 h-40 object-cover rounded-lg" />
        <audio src={cancionEncontrada.audio} controls></audio>
      </main>
    );
  } else {
    return (
      <h2>Página no encontrada - Error 404</h2>
    );
  }
}
export default DetalleCancion;
