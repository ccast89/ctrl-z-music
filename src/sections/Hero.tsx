import { Link } from "react-router";

function Hero() {
  return (
    <section className="bg-[#121212] text-white px-5 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TEXTO */}
          <div className="max-w-2xl text-center lg:text-left">

            <p className="text-[#1DB954] font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest mb-4">
              CTRL-Z MUSIC
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Tu música.
              <br />
              Tu momento.
            </h1>

            <p className="text-[#B3B3B3] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
              Descubrí nuevas canciones, artistas y sonidos. Encontrá la música
              que va con vos.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">

              <Link
                to="/biblioteca"
                className="bg-[#1DB954] text-black font-bold px-7 py-3 rounded-full hover:bg-[#1ED760] transition text-center"
              >
                Explorar música
              </Link>

              <Link
                to="/descubrir-artistas"
                className="border border-[#555] text-white font-semibold px-7 py-3 rounded-full hover:border-[#1DB954] hover:text-[#1DB954] transition text-center"
              >
                Descubrir artistas
              </Link>

            </div>
          </div>

          {/* PARTE VISUAL */}
          <div className="flex justify-center lg:justify-end lg:translate-y-8">

            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[430px] lg:h-[430px]">

              {/* CÍRCULO EXTERIOR */}
              <div className="absolute inset-0 rounded-full border border-[#1DB954]/20 bg-[#1DB954]/5"></div>

              {/* CÍRCULO MEDIO */}
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-[#1DB954]/30 bg-[#1DB954]/10"></div>

              {/* CÍRCULO CENTRAL */}
              <div className="absolute inset-16 sm:inset-20 md:inset-24 rounded-full bg-[#1DB954] flex items-center justify-center shadow-[0_0_80px_rgba(29,185,84,0.25)]">

                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-2">
                    🎧
                  </div>

                  <p className="text-black font-bold text-xs sm:text-sm">
                    ESCUCHÁ
                  </p>
                </div>

              </div>

              {/* PEQUEÑOS DETALLES */}
              <div className="absolute top-6 right-7 sm:top-8 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 bg-[#1DB954] rounded-full"></div>

              <div className="absolute bottom-10 left-6 sm:bottom-12 sm:left-8 w-2 h-2 bg-[#1DB954] rounded-full"></div>

              <div className="absolute top-1/2 -left-1 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#1DB954]/60 rounded-full"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;