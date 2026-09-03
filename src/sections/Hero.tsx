function Hero() {
  return (
    <section className="bg-[#121212] text-white px-6 md:px-10 lg:px-16 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* TEXTO */}
          <div className="max-w-2xl">

            <p className="text-[#1DB954] font-bold text-sm md:text-base uppercase tracking-widest mb-4">
              CTRL-Z MUSIC
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Tu música.
              <br />
              Tu momento.
            </h1>

            <p className="text-[#B3B3B3] text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Descubrí nuevas canciones, artistas y sonidos.
              Encontrá la música que va con vos.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1DB954] text-black font-bold px-7 py-3 rounded-full hover:bg-[#1ED760] transition">
                Explorar música
              </button>

              <button className="border border-[#555] text-white font-semibold px-7 py-3 rounded-full hover:border-[#1DB954] hover:text-[#1DB954] transition">
                Descubrir artistas
              </button>
            </div>

          </div>

          {/* PARTE VISUAL */}
            <div className="flex justify-center lg:justify-end lg:translate-y-8">

            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[430px] lg:h-[430px]">

              {/* CÍRCULO EXTERIOR */}
              <div className="absolute inset-0 rounded-full border border-[#1DB954]/20 bg-[#1DB954]/5">
              </div>

              {/* CÍRCULO MEDIO */}
              <div className="absolute inset-8 rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10">
              </div>

              {/* CÍRCULO CENTRAL */}
              <div className="absolute inset-20 md:inset-24 rounded-full bg-[#1DB954] flex items-center justify-center shadow-[0_0_80px_rgba(29,185,84,0.25)]">

                <div className="text-center">
                  <div className="text-7xl md:text-8xl mb-2">
                    🎧
                  </div>

                  <p className="text-black font-bold text-sm">
                    ESCUCHÁ
                  </p>
                </div>

              </div>

              {/* PEQUEÑOS DETALLES */}
              <div className="absolute top-8 right-10 w-3 h-3 bg-[#1DB954] rounded-full"></div>

              <div className="absolute bottom-12 left-8 w-2 h-2 bg-[#1DB954] rounded-full"></div>

              <div className="absolute top-1/2 -left-2 w-3 h-3 bg-[#1DB954]/60 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;