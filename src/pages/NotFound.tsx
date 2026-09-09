import { Link } from "react-router-dom";

function NotFound(){
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center p-6 text-white">
      {/* Diseño del número 404 */}
      <div className="relative mb-6">
        <h1 className="text-9xl font-black text-slate-800 tracking-widest select-none">
           ERROR 404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🎵</span>
        </div>
      </div>

      {/* Textos de error */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-purple-400">
        Pagina no encontrada
      </h2>
      <p className="text-slate-400 max-w-md mb-8 text-base sm:text-lg">
        La página que estás buscando se ha movido, fue eliminada o no existe.
      </p>

      {/* Botón para volver a la página principal */}
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
export default NotFound; 