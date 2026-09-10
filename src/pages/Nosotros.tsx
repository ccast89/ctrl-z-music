import MemberCard from "../components/MemberCard";

export default function AcercaDeNosotros() {
  // Lista con la información de los integrantes del equipo
  const teamMembers = [
    {
      id: 1,
      name: "Carla Castellano",
      role: "Lider de equipo. Desarrolladora",
      avatarUrl: "/fotos/Carla.jpeg",
    },
    {
      id: 2,
      name: "Alvaro Cedron",
      role: "Desarrollador Frontend / diseñador",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Pepe Galarzo",
      role: "Desarrollador Frontend",
      avatarUrl:
        "https://i.pinimg.com/474x/16/e3/e1/16e3e14f68020bce613fd642abb3c8c9.jpg",
    },
    {
      id: 4,
      name: "Esteban Vellido",
      role: "Desarrollador Frontend",
      avatarUrl:
        "https://i.pinimg.com/564x/c4/12/f1/c412f10ca3aee106e1ca5608299b234c.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado y Frase Representativa */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#1DB954]">
            Acerca de Nosotros
          </h1>
          <p className="text-xl italic text-neutral-300 max-w-2xl mx-auto border-l-4 border-[#1DB954] pl-4 py-3 bg-neutral-900 rounded-r-lg">
            "La mejor musica y a tu alcance."
          </p>
        </div>

        {/* Descripción general del proyecto/equipo */}
        <div className="bg-neutral-900 p-6 sm:p-8 rounded-xl border border-neutral-800 mb-12 text-neutral-300 leading-relaxed text-center">
          <p>
            Con Ctrl + z es fácil encontrar la música para cada momento desde tu
            teléfono, computadora, tablet y diferentes dispositivos compatibles.
            Ofrecemos millones de canciones desde lo que te gusta hasta lo mas
            recomendado segun las tendencias. Sea que estés manejando, haciendo
            ejercicio, en alguna fiesta o en un momento relajado, la música
            siempre están a tu alcance. Elige lo que quieres escuchar o dejate
            sorprender con su lista variada. Además, puedes explorar las
            colecciones de amigos, artistas y celebridades para disfrutar de
            toda la música y compartir el gusto de los demas. Ponle música a tu
            vida con Ctrl + z. Suscríbete o escucha música gratis. Este es tu
            lugar.
          </p>
        </div>

        {/* Galería de integrantes (Grid Responsive) */}
        <h2 className="text-2xl font-bold mb-8 text-center">
          El equipo de desarrolladores a tu servicio ante consultas y dudas.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              avatarUrl={member.avatarUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
