import { useContext, useState } from "react";

import { Link } from "react-router";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const auth = useContext(AuthContext); // Para que el nav sepa si ya iniciaron sesión

  const [menuAbierto, setMenuAbierto] = useState(false);

  if (!auth) {
    return null;
  }

  const { user, logout } = auth;

  // Función para cerrar el menú móvil
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center">
            <span className="text-lg">🎧</span>
          </div>

          <span className="text-xl md:text-2xl font-black tracking-tight text-white">
            CTRL-Z
            <span className="text-[#1DB954]"> MUSIC</span>
          </span>
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-white font-medium hover:text-[#1DB954] transition"
          >
            Inicio
          </Link>

          <Link
            to="/buscar"
            className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
          >
            Buscar
          </Link>

          <Link
            to="/playlists"
            className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
          >
            Crea tu playlist
          </Link>

          <Link
            to="/biblioteca"
            className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
          >
            Biblioteca
          </Link>

          {user?.rol === "admin" && (
            <Link
              to="/admin"
              className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
            >
              Administración
            </Link>
          )}

          {user ? (
            <button
              onClick={logout}
              className="bg-[#1DB954] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#1ED760] transition"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[#1DB954] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#1ED760] transition"
            >
              Acceso
            </Link>
          )}
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Abrir menú"
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        {/* MENÚ MÓVIL */}
        {menuAbierto && (
          <div className="absolute top-20 left-0 w-full bg-[#121212] border-t border-white/5 border-b border-white/10 md:hidden">
            
            <div className="flex flex-col items-center gap-5 py-6">

              <Link
                to="/"
                onClick={cerrarMenu}
                className="text-white font-medium hover:text-[#1DB954] transition"
              >
                Inicio
              </Link>

              <Link
                to="/buscar"
                onClick={cerrarMenu}
                className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
              >
                Buscar
              </Link>

              <Link
                to="/playlists"
                onClick={cerrarMenu}
                className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
              >
                Crea tu playlist
              </Link>

              <Link
                to="/biblioteca"
                onClick={cerrarMenu}
                className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
              >
                Biblioteca
              </Link>

              {user?.rol === "admin" && (
                <Link
                  to="/admin"
                  onClick={cerrarMenu}
                  className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
                >
                  Administración
                </Link>
              )}

              {user ? (
                <button
                  onClick={() => {
                    logout();
                    cerrarMenu();
                  }}
                  className="bg-[#1DB954] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#1ED760] transition"
                >
                  Cerrar sesión
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={cerrarMenu}
                  className="bg-[#1DB954] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#1ED760] transition"
                >
                  Acceso
                </Link>
              )}

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;