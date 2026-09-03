import { Link } from "react-router";
function Footer() {
  return (
    <footer className="bg-[#181818] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* MARCA */}
          <div>
            <Link to="/">
              <h2 className="text-2xl font-bold text-[#1DB954]">
                CTRL-Z MUSIC
              </h2>
            </Link>

            <p className="text-[#B3B3B3] mt-4 leading-relaxed max-w-xs">
              Tu música, tus artistas y tus sonidos favoritos en un solo lugar.
            </p>
          </div>

          {/* COMPAÑÍA */}
          <div>
            <h3 className="font-bold text-white mb-4">Compañía</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/nosotros"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition"
                >
                  Sobre nosotros
                </Link>
              </li>

              <li>
                <Link
                  to="/proyecto"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition"
                >
                  Nuestro proyecto
                </Link>
              </li>

              <li>
                <Link
                  to="/contacto"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h3 className="font-bold text-white mb-4">Navegación</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/explorar"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition"
                >
                  Explorar
                </Link>
              </li>

              <li>
                <Link
                  to="/playlists"
                  className="text-[#B3B3B3] hover:text-[#1DB954] transition"
                >
                  Biblioteca
                </Link>
              </li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div>
            <h3 className="font-bold text-white mb-4">Seguinos</h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/instagram"
                className="text-[#B3B3B3] hover:text-[#1DB954] transition"
              >
                Instagram
              </Link>

              <Link
                to="/facebook"
                className="text-[#B3B3B3] hover:text-[#1DB954] transition"
              >
                Facebook
              </Link>

              <Link
                to="/x"
                className="text-[#B3B3B3] hover:text-[#1DB954] transition"
              >
                X
              </Link>
            </div>
          </div>
        </div>

        {/* SEPARADOR Y COPYRIGHT */}
        <div className="border-t border-[#333333] mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[#B3B3B3] text-sm">© 2026 CTRL-Z MUSIC</p>

            <p className="text-[#666666] text-sm">
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
