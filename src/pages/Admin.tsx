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

  const cancelar = () => {
    reset();
    setIdEdicion(null);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      <h1 className="text-3xl font-bold mb-8">Administración</h1>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="bg-zinc-900 p-6 rounded-2xl mb-10"
      >
        <div className="mb-4">
          <label htmlFor="titulo" className="block mb-2 font-medium">
            Título
          </label>

          <input
            type="text"
            id="titulo"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 outline-none focus:border-[#1DB954]"
            {...register("titulo", {
              required: "El título es obligatorio",
            })}
          />

          {errors.titulo && (
            <p className="text-red-400 text-sm mt-1">{errors.titulo.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="artista" className="block mb-2 font-medium">
            Artista
          </label>

          <input
            type="text"
            id="artista"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 outline-none focus:border-[#1DB954]"
            {...register("artista", {
              required: "El artista es obligatorio",
            })}
          />

          {errors.artista && (
            <p className="text-red-400 text-sm mt-1">
              {errors.artista.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="categoria" className="block mb-2 font-medium">
            Categoría
          </label>

          <input
            type="text"
            id="categoria"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 outline-none focus:border-[#1DB954]"
            {...register("categoria", {
              required: "La categoría es obligatoria",
            })}
          />

          {errors.categoria && (
            <p className="text-red-400 text-sm mt-1">
              {errors.categoria.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="imagen" className="block mb-2 font-medium">
            Imagen
          </label>

          <input
            type="text"
            id="imagen"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 outline-none focus:border-[#1DB954]"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />

          {errors.imagen && (
            <p className="text-red-400 text-sm mt-1">{errors.imagen.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="duracion" className="block mb-2 font-medium">
            Duración
          </label>

          <input
            type="text"
            id="duracion"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 outline-none focus:border-[#1DB954]"
            {...register("duracion", {
              required: "La duración es obligatoria",
            })}
          />

          {errors.duracion && (
            <p className="text-red-400 text-sm mt-1">
              {errors.duracion.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="audio" className="block mb-2 font-medium">
            Audio
          </label>

          <input
            type="text"
            id="audio"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 outline-none focus:border-[#1DB954]"
            {...register("audio", {
              required: "El audio es obligatorio",
            })}
          />

          {errors.audio && (
            <p className="text-red-400 text-sm mt-1">{errors.audio.message}</p>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#1DB954] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#1ED760] transition"
          >
            {idEdicion ? "Guardar cambios" : "Agregar canción"}
          </button>

          <button
            type="button"
            onClick={cancelar}
            className="bg-zinc-700 text-white font-bold px-6 py-2.5 rounded-full hover:bg-zinc-600 transition"
          >
            Cancelar
          </button>
        </div>
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
