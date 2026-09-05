import { Routes, Route } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import DetalleCancion from "../pages/DetalleCancion";
import Registro from "../pages/Registro";
import ProtectedRoutes from "./ProtectedRoutes";
import Playlists from "../pages/Playlists";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="cancion/:id" element={<DetalleCancion />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
        <Route path="/registro" element={<Registro />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
