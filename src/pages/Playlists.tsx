import { useState, useEffect, useContext } from "react";
import { canciones } from "../data/canciones";
import { AuthContext } from "../context/AuthContext";

interface Playlist {
  id: number;
  nombre: string;
  usuarioId: number;
  canciones: string[];
}

function Playlists() {
  const auth = useContext(AuthContext);
  if (!auth) return null;

  const { user } = auth;
  if (!user) return null;

  const [nombre, setNombre] = useState("");
  const [playlists, setPlaylists] = useState<Playlist[]>(() => {
    try {
      const playlistsGuardadas = localStorage.getItem("playlists");

      return playlistsGuardadas ? JSON.parse(playlistsGuardadas) : [];
    } catch (error) {
      console.error("Error al leer las playlists guardadas:", error);
      return [];
    }
  });
  const [busqueda, setBusqueda] = useState("");
  const [playlistSeleccionada, setPlaylistSeleccionada] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("playlists", JSON.stringify(playlists));
    } catch (error) {
      console.error("Error al guardar las playlists:", error);
    }
  }, [playlists]);

  const crearPlaylist = () => {
    if (nombre === "") return;

    const nuevaPlaylist: Playlist = {
      id: playlists.length + 1,
      nombre: nombre,
      usuarioId: user.id,
      canciones: [],
    };

    setPlaylists([...playlists, nuevaPlaylist]);
    setNombre("");
  };

  const agregarCancion = (idCancion: string) => {
    if (playlistSeleccionada === "") return;

    const playlistsActualizadas = playlists.map((playlist) => {
      if (playlist.id === Number(playlistSeleccionada)) {
        if (playlist.canciones.includes(idCancion)) {
          return playlist;
        }

        return {
          ...playlist,
          canciones: [...playlist.canciones, idCancion],
        };
      }

      return playlist;
    });

    setPlaylists(playlistsActualizadas);
  };

  const quitarCancion = (idPlaylist: number, idCancion: string) => {
    const playlistsActualizadas = playlists.map((playlist) => {
      if (playlist.id === idPlaylist) {
        return {
          ...playlist,
          canciones: playlist.canciones.filter(
            (cancionId) => cancionId !== idCancion,
          ),
        };
      }

      return playlist;
    });

    setPlaylists(playlistsActualizadas);
  };

  const eliminarPlaylist = (idPlaylist: number) => {
    const playlistsActualizadas = playlists.filter(
      (playlist) => playlist.id !== idPlaylist,
    );

    setPlaylists(playlistsActualizadas);
  };

  const cancionesFiltradas = canciones.filter(
    (cancion) =>
      cancion.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      cancion.artista.toLowerCase().includes(busqueda.toLowerCase()) ||
      cancion.categoria.toLowerCase().includes(busqueda.toLowerCase()),
  );

  const playlistsDelUsuario = playlists.filter(
    (playlist) => playlist.usuarioId === user.id,
  );

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">Mis playlists</h1>

        <section className="mb-10 rounded-xl bg-neutral-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">Crear una playlist</h2>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Nombre de la playlist"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 outline-none"
            />

            <button
              onClick={crearPlaylist}
              className="bg-[#1DB954] text-black font-semibold px-6 py-2 rounded-full hover:brightness-90"
            >
              Crear
            </button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Buscar canciones</h2>

          <input
            type="text"
            placeholder="Buscar por canción, artista o género"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="mb-5 w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none"
          />

          <div className="space-y-3">
            {busqueda.trim().length >= 3 &&
              cancionesFiltradas.map((cancion) => (
                <div
                  key={cancion.id}
                  className="flex items-center justify-between gap-4 rounded-xl bg-neutral-900 p-4"
                >
                  <div>
                    <p className="font-semibold">{cancion.titulo}</p>

                    <p className="text-sm text-neutral-400">
                      {cancion.artista} · {cancion.categoria}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <select
                      value={playlistSeleccionada}
                      onChange={(e) => setPlaylistSeleccionada(e.target.value)}
                      className="w-full sm:w-auto bg-neutral-800 border border-[#1DB954] text-white px-4 py-2 rounded-full outline-none cursor-pointer"
                    >
                      <option value="" className="bg-neutral-800 text-white">
                        Elegir playlist
                      </option>

                      {playlistsDelUsuario.map((playlist) => (
                        <option
                          key={playlist.id}
                          value={playlist.id}
                          className="bg-neutral-800 text-white"
                        >
                          {playlist.nombre}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => agregarCancion(cancion.id)}
                      className="w-full sm:w-auto bg-[#1DB954] text-black font-semibold px-5 py-2 rounded-full hover:brightness-90"
                    >
                      + Agregar
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Tus playlists</h2>

          <div className="space-y-5">
            {playlistsDelUsuario.map((playlist) => (
              <div key={playlist.id} className="rounded-xl bg-neutral-900 p-6">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold text-center sm:text-left">
                    {playlist.nombre}
                  </h3>

                  <button
                    onClick={() => eliminarPlaylist(playlist.id)}
                    className="bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:brightness-90"
                  >
                    Eliminar playlist
                  </button>
                </div>

                {playlist.canciones.length === 0 && (
                  <p className="text-sm text-neutral-500">
                    Todavía no agregaste canciones.
                  </p>
                )}

                <div className="space-y-2">
                  {playlist.canciones.map((idCancion) => {
                    const cancion = canciones.find(
                      (cancion) => cancion.id === idCancion,
                    );

                    return (
                      <div
                        key={idCancion}
                        className="flex items-center justify-between rounded-lg bg-neutral-800 p-3"
                      >
                        <div>
                          <p className="font-medium">{cancion?.titulo}</p>

                          <p className="text-sm text-neutral-400">
                            {cancion?.artista}
                          </p>
                        </div>

                        <button
                          onClick={() => quitarCancion(playlist.id, idCancion)}
                          className="border border-[#1DB954] text-[#1DB954] font-semibold px-4 py-2 rounded-full hover:bg-[#1DB954] hover:text-black"
                        >
                          Quitar
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Playlists;
