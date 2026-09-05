import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

interface LoginForm {
  correo: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  if (!auth) {
    return null;
  }

  const { login } = auth;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const formSubmit = (data: LoginForm) => {
    const { correo, password } = data;

    const loginCorrecto = login(correo, password);

    if (loginCorrecto) {
      navigate("/");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <section className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Iniciar sesión</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
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
            <label htmlFor="password" className="mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Ingresá tu contraseña"
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
          <button
            type="submit"
            className="w-full bg-[#1DB954] text-black font-semibold py-3 rounded-full hover:brightness-90"
          >
            Iniciar sesión
          </button>
          <div className="text-center mt-6 text-gray-400">
            <p>¿Todavía no tenés cuenta?</p>

            <Link to="/registro" className="text-[#1DB954] hover:underline">
              Registrate aquí
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
