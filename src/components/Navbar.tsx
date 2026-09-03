import { Link } from "react-router";

function Navbar() {
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

        {/* NAVEGACIÓN */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-white font-medium hover:text-[#1DB954] transition"
          >
            Inicio
          </Link>

          <Link
            to="/explorador"
            className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
          >
            Explorador
          </Link>

          <Link
            to="/biblioteca"
            className="text-[#B3B3B3] font-medium hover:text-[#1DB954] transition"
          >
            Biblioteca
          </Link>

          <Link
            to="/login"
            className="bg-[#1DB954] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#1ED760] transition"
          >
            Acceso
          </Link>
        </div>

        {/* BOTÓN MÓVIL */}

        <button className="md:hidden text-white text-2xl">☰</button>
      </nav>
    </header>
  );
}

export default Navbar;
