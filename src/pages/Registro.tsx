import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { UsuarioRegistrado } from "../interfaces/auth";

interface RegistroForm {
  nombreCompleto: string;
  correo: string;
  telefono: string;
  password: string;
  confirmarPassword: string;
}

function Registro() {
  const navigate = useNavigate();
  const [errorRegistro, setErrorRegistro] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistroForm>();

  const formSubmit = (data: RegistroForm) => {
    try {
      if (data.password !== data.confirmarPassword) {
        setErrorRegistro("Las contraseñas no coinciden");
        return;
      }

      const usuariosGuardados = localStorage.getItem("users");

      const usuarios: UsuarioRegistrado[] = usuariosGuardados
        ? JSON.parse(usuariosGuardados)
        : [];

      const correoExistente = usuarios.find(
        (usuario) => usuario.correo === data.correo,
      );

      if (correoExistente) {
        setErrorRegistro("El correo ya está registrado");
        return;
      }

      const nuevoUsuario: UsuarioRegistrado = {
        id: usuarios.length + 1,
        nombreCompleto: data.nombreCompleto,
        correo: data.correo,
        telefono: data.telefono,
        password: data.password,
        rol: "user",
      };

      usuarios.push(nuevoUsuario);

      localStorage.setItem("users", JSON.stringify(usuarios));

      setErrorRegistro("");

      navigate("/login");
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      setErrorRegistro("Ocurrió un error al crear la cuenta");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Crear cuenta</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="flex flex-col mb-4">
            <label htmlFor="nombreCompleto" className="mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombreCompleto"
              placeholder="Ingresá tu nombre completo"
              className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-500"
              {...register("nombreCompleto", {
                required: "El campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
              })}
            />
            {errors.nombreCompleto && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nombreCompleto.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="correo" className="mb-2">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              placeholder="example@example.com"
              className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-500"
              {...register("correo", {
                required: "El campo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Formato de correo inválido",
                },
              })}
            />
            {errors.correo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.correo.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="telefono" className="mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              placeholder="3815555555"
              className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-500"
              {...register("telefono", {
                required: "El campo es obligatorio",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "El teléfono debe tener 10 números",
                },
              })}
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">
                {errors.telefono.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Ingresá una contraseña"
              className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-500"
              {...register("password", {
                required: "El campo es obligatorio",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="confirmarPassword" className="mb-2">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmarPassword"
              placeholder="Repetí tu contraseña"
              className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-500"
              {...register("confirmarPassword", {
                required: "El campo es obligatorio",
              })}
            />
            {errors.confirmarPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmarPassword.message}
              </p>
            )}
          </div>

          {errorRegistro && (
            <p className="text-red-500 text-sm text-center mb-4">
              {errorRegistro}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-semibold py-3 rounded-full hover:brightness-90"
          >
            Crear cuenta
          </button>
        </form>
      </section>
    </main>
  );
}

export default Registro;
