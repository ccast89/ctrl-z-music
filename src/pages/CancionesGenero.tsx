import { useParams } from "react-router";
import { canciones } from "../data/canciones";
import { Link } from "react-router";

function CancionesGenero() {
  const { genero } = useParams();

  const cancionesDelGenero = canciones.filter(
    (cancion) => cancion.categoria.toLowerCase() === genero
  );

  if (cancionesDelGenero.length === 0) {
    return (
      <main>
        <h2>Género no encontrado - Error 404</h2>
      </main>
    );
  }

  return (
    <main>
      <h1>{genero}</h1>
      {cancionesDelGenero.map((cancion) => (
        <Link key={cancion.id} to={`/cancion/${cancion.id}`}>
          <img
            src={cancion.imagen}
            alt={cancion.titulo}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <p>{cancion.titulo} - {cancion.artista}</p>
        </Link>
      ))}
    </main>
  );
}

export default CancionesGenero;