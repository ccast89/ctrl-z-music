import { Link } from "react-router";

function MusicGenres() {
  return (
    <section className="bg-[#181818] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Géneros musicales</h2>

          <p className="text-[#B3B3B3] mt-2">
            Explorá música según el estilo que más te guste.
          </p>
        </div>

        {/* GÉNEROS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Link
            to="/generos/Hard Rock"
            className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer"
          >
            <h3 className="text-xl font-bold">Rock</h3>
            <p className="text-sm mt-2 opacity-70">Guitarras y energía</p>
          </Link>

          <Link
            to="/generos/Pop"
            className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer"
          >
            <h3 className="text-xl font-bold">Pop</h3>
            <p className="text-sm mt-2 opacity-70">Grandes éxitos</p>
          </Link>

          <Link
            to="/generos/Trap"
            className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer"
          >
            <h3 className="text-xl font-bold">Trap</h3>
            <p className="text-sm mt-2 opacity-70">Sonidos urbanos</p>
          </Link>

          <Link
            to="/generos/Regueton"
            className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer"
          >
            <h3 className="text-xl font-bold">Reggaetón</h3>
            <p className="text-sm mt-2 opacity-70">Ritmo y movimiento</p>
          </Link>

          <Link
            to="/generos/Electro"
            className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer"
          >
            <h3 className="text-xl font-bold">Electrónica</h3>
            <p className="text-sm mt-2 opacity-70">Beats y sonidos</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MusicGenres;
