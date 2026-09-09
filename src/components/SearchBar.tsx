interface SearchBarProps {
  busqueda: string;
  setBusqueda: (valor: string) => void;
}

const SearchBar = ({ busqueda, setBusqueda }: SearchBarProps) => {
  const manejarBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl items-center rounded-full border border-gray-700 bg-[#1f1f1f] px-5 py-2 shadow-lg">
      <span className="mr-3 text-xl text-gray-400">🔍</span>

      <input
        type="text"
        value={busqueda}
        onChange={manejarBusqueda}
        placeholder="Buscar canciones o artistas..."
        className="w-full bg-transparent px-2 py-3 text-white outline-none placeholder:text-gray-500"
      />
    </div>
  );
};

export default SearchBar;