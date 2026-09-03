function MusicGenres() {
  return (
    <section className="bg-[#181818] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Géneros musicales
          </h2>

          <p className="text-[#B3B3B3] mt-2">
            Explorá música según el estilo que más te guste.
          </p>
        </div>

        {/* GÉNEROS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          <div className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer">
            <h3 className="text-xl font-bold">
              Rock
            </h3>
            <p className="text-sm mt-2 opacity-70">
              Guitarras y energía
            </p>
          </div>

          <div className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer">
            <h3 className="text-xl font-bold">
              Pop
            </h3>
            <p className="text-sm mt-2 opacity-70">
              Grandes éxitos
            </p>
          </div>

          <div className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer">
            <h3 className="text-xl font-bold">
              Trap
            </h3>
            <p className="text-sm mt-2 opacity-70">
              Sonidos urbanos
            </p>
          </div>

          <div className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer">
            <h3 className="text-xl font-bold">
              Reggaetón
            </h3>
            <p className="text-sm mt-2 opacity-70">
              Ritmo y movimiento
            </p>
          </div>

          <div className="bg-[#242424] rounded-xl p-6 hover:bg-[#1DB954] hover:text-black transition cursor-pointer">
            <h3 className="text-xl font-bold">
              Electrónica
            </h3>
            <p className="text-sm mt-2 opacity-70">
              Beats y sonidos
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MusicGenres;