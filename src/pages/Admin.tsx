import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { canciones } from "../data/canciones";
import type { Cancion } from "../interfaces/cancion";

interface CancionForm {
  titulo: string;
  artista: string;
  categoria: string;
  imagen: string;
  duracion: string;
  audio: string;
}

// No lo hacemos en la carpeta interfaces xq solo la vamos a usar en la página del admin

function Admin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CancionForm>();

  const [listaCanciones, setListaCanciones] = useState<Cancion[]>(() => {
    try {
      const cancionesGuardadas = localStorage.getItem("canciones");

      return cancionesGuardadas ? JSON.parse(cancionesGuardadas) : canciones;
    } catch (error) {
      console.error("Error al leer las canciones guardadas:", error);
      return canciones;
    }
  });

  const [idEdicion, setIdEdicion] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("canciones", JSON.stringify(listaCanciones));
    } catch (error) {
      console.error("Error al guardar las canciones:", error);
    }
  }, [listaCanciones]);

  const formSubmit = (data: CancionForm) => {
    if (idEdicion) {
      const cancionesActualizadas = listaCanciones.map((cancion) =>
        cancion.id === idEdicion
          ? {
              id: cancion.id,
              titulo: data.titulo,
              artista: data.artista,
              categoria: data.categoria,
              imagen: data.imagen,
              duracion: data.duracion,
              audio: data.audio,
            }
          : cancion,
      );

      setListaCanciones(cancionesActualizadas);
      setIdEdicion(null);
      reset();
      return;
    }

    const nuevoId = String(
      Math.max(...listaCanciones.map((cancion) => Number(cancion.id))) + 1,
    );

    const nuevaCancion: Cancion = {
      id: nuevoId,
      titulo: data.titulo,
      artista: data.artista,
      categoria: data.categoria,
      imagen: data.imagen,
      duracion: data.duracion,
      audio: data.audio,
    };

    setListaCanciones([...listaCanciones, nuevaCancion]);
    reset();
  };

  const eliminarCancion = (id: string) => {
    const cancionesActualizadas = listaCanciones.filter(
      (cancion) => cancion.id !== id,
    );

    setListaCanciones(cancionesActualizadas);
  };

  const editarCancion = (id: string) => {
    const cancionEncontrada = listaCanciones.find(
      (cancion) => cancion.id === id,
    );

    if (cancionEncontrada) {
      const { titulo, artista, categoria, imagen, duracion, audio } =
        cancionEncontrada;

      setIdEdicion(id);

      reset({
        titulo,
        artista,
        categoria,
        imagen,
        duracion,
        audio,
      });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      <h1 className="text-3xl font-bold mb-8">Administración</h1>

      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="titulo">Título</label>

          <input
            type="text"
            id="titulo"
            {...register("titulo", {
              required: "El título es obligatorio",
            })}
          />

          {errors.titulo && <p>{errors.titulo.message}</p>}
        </div>

        <div>
          <label htmlFor="artista">Artista</label>

          <input
            type="text"
            id="artista"
            {...register("artista", {
              required: "El artista es obligatorio",
            })}
          />

          {errors.artista && <p>{errors.artista.message}</p>}
        </div>

        <div>
          <label htmlFor="categoria">Categoría</label>

          <input
            type="text"
            id="categoria"
            {...register("categoria", {
              required: "La categoría es obligatoria",
            })}
          />

          {errors.categoria && <p>{errors.categoria.message}</p>}
        </div>

        <div>
          <label htmlFor="imagen">Imagen</label>

          <input
            type="text"
            id="imagen"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />

          {errors.imagen && <p>{errors.imagen.message}</p>}
        </div>

        <div>
          <label htmlFor="duracion">Duración</label>

          <input
            type="text"
            id="duracion"
            {...register("duracion", {
              required: "La duración es obligatoria",
            })}
          />

          {errors.duracion && <p>{errors.duracion.message}</p>}
        </div>

        <div>
          <label htmlFor="audio">Audio</label>

          <input
            type="text"
            id="audio"
            {...register("audio", {
              required: "El audio es obligatorio",
            })}
          />

          {errors.audio && <p>{errors.audio.message}</p>}
        </div>

        <button type="submit">Agregar canción</button>
      </form>

      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Categoría</th>
            <th>Duración</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {listaCanciones.map(
            ({ id, titulo, artista, categoria, duracion }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{titulo}</td>
                <td>{artista}</td>
                <td>{categoria}</td>
                <td>{duracion}</td>

                <td>
                  <button onClick={() => editarCancion(id)}>Editar</button>

                  <button onClick={() => eliminarCancion(id)}>Eliminar</button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </main>
  );
}

export default Admin;
