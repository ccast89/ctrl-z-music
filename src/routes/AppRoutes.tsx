import { Routes, Route } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import DetalleCancion from "../pages/DetalleCancion";
import Registro from "../pages/Registro";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Playlists from "../pages/Playlists";
import Biblioteca from "../pages/Biblioteca";
import Busqueda from "../pages/Busqueda";
import MusicaDestacada from "../pages/MusicaDestacada";
import CancionesArtista from "../pages/CancionesArtista";
import CancionesGenero from "../pages/CancionesGenero";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="cancion/:id" element={<DetalleCancion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/buscar" element={<Busqueda />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/musica-destacada" element={<MusicaDestacada />} />
        <Route path="/artistas/:artista" element={<CancionesArtista />} />
        <Route path="/generos/:genero" element={<CancionesGenero />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/playlists"
          element={
            <PrivateRoutes>
              <Playlists />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
