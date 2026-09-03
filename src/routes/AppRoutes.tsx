import { Routes, Route } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import DetalleCancion from "../pages/DetalleCancion";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cancion/:id" element={<DetalleCancion />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
