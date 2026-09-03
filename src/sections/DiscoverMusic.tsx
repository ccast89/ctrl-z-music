function DiscoverMusic() {
  return (
    <section className="bg-[#121212] text-white px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        
        <div className="bg-[#1DB954] rounded-3xl px-8 py-12 md:px-16 md:py-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Descubrí más música
          </h2>

          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
            Encontrá nuevos artistas, canciones y géneros.
            Siempre hay algo nuevo para escuchar.
          </p>

          <button className="bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-[#242424] transition">
            Comenzar a explorar
          </button>

        </div>

      </div>
    </section>
  );
}

export default DiscoverMusic;