// Definimos los tipos de datos que recibirá el componente (TypeScript)
interface MemberCardProps {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function MemberCard({ name, role, avatarUrl }: MemberCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={avatarUrl}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-[#1DB954] shadow-md"
      />
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-[#1DB954] font-medium text-sm">{role}</p>
    </div>
  );
}
