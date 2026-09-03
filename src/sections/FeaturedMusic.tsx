function FeaturedMusic() {
  return (
    <section className="bg-[#181818] text-white px-6 md:px-12 lg:px-20 py-16">
      
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Música destacada
          </h2>

          <p className="text-[#B3B3B3] mt-2">
            Escuchá algunas de las canciones más destacadas.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {/* TARJETA 1 */}
          <div className="bg-[#242424] rounded-xl p-4 hover:bg-[#2a2a2a] transition">
            <div className="aspect-square bg-[#333333] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-5xl">🎵</span>
            </div>

            <h3 className="font-bold text-lg">
              Nueva canción
            </h3>

            <p className="text-[#B3B3B3] text-sm mt-1">
              Artista destacado
            </p>
          </div>

          {/* TARJETA 2 */}
          <div className="bg-[#242424] rounded-xl p-4 hover:bg-[#2a2a2a] transition">
            <div className="aspect-square bg-[#333333] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-5xl">🎧</span>
            </div>

            <h3 className="font-bold text-lg">
              Sonidos nuevos
            </h3>

            <p className="text-[#B3B3B3] text-sm mt-1">
              Artista destacado
            </p>
          </div>

          {/* TARJETA 3 */}
          <div className="bg-[#242424] rounded-xl p-4 hover:bg-[#2a2a2a] transition">
            <div className="aspect-square bg-[#333333] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-5xl">🎶</span>
            </div>

            <h3 className="font-bold text-lg">
              Ritmo urbano
            </h3>

            <p className="text-[#B3B3B3] text-sm mt-1">
              Artista destacado
            </p>
          </div>

          {/* TARJETA 4 */}
          <div className="bg-[#242424] rounded-xl p-4 hover:bg-[#2a2a2a] transition">
            <div className="aspect-square bg-[#333333] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-5xl">🎤</span>
            </div>

            <h3 className="font-bold text-lg">
              Lo más escuchado
            </h3>

            <p className="text-[#B3B3B3] text-sm mt-1">
              Artista destacado
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedMusic;