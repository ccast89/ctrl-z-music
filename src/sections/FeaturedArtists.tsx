function FeaturedArtists() {
  return (
    <section className="bg-[#121212] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Artistas destacados
          </h2>

          <p className="text-[#B3B3B3] mt-2">
            Conocé artistas y descubrí nuevos sonidos.
          </p>
        </div>

        {/* ARTISTAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* ARTISTA 1 */}
          <div className="text-center group">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-[#242424] flex items-center justify-center group-hover:scale-105 transition">
              <span className="text-6xl">🎤</span>
            </div>

            <h3 className="font-bold text-lg mt-4">
              Artista 01
            </h3>

            <p className="text-[#B3B3B3] text-sm">
              Pop
            </p>
          </div>

          {/* ARTISTA 2 */}
          <div className="text-center group">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-[#242424] flex items-center justify-center group-hover:scale-105 transition">
              <span className="text-6xl">🎸</span>
            </div>

            <h3 className="font-bold text-lg mt-4">
              Artista 02
            </h3>

            <p className="text-[#B3B3B3] text-sm">
              Rock
            </p>
          </div>

          {/* ARTISTA 3 */}
          <div className="text-center group">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-[#242424] flex items-center justify-center group-hover:scale-105 transition">
              <span className="text-6xl">🎧</span>
            </div>

            <h3 className="font-bold text-lg mt-4">
              Artista 03
            </h3>

            <p className="text-[#B3B3B3] text-sm">
              Electrónica
            </p>
          </div>

          {/* ARTISTA 4 */}
          <div className="text-center group">
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-[#242424] flex items-center justify-center group-hover:scale-105 transition">
              <span className="text-6xl">🎙️</span>
            </div>

            <h3 className="font-bold text-lg mt-4">
              Artista 04
            </h3>

            <p className="text-[#B3B3B3] text-sm">
              Urbano
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedArtists;