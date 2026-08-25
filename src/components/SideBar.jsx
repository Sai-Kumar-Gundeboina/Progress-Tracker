import {
  Home,
  Layers,
  Sword,
  Cloud,
  Database,
  Settings,
} from "lucide-react";

const items = [
  { icon: Home, label: "Dashboard" },
  { icon: Layers, label: "Low Level Design" },
  { icon: Sword, label: "DSA" },
  { icon: Cloud, label: "AWS" },
  { icon: Database, label: "Data Engineering" },
  { icon: Settings, label: "Admin" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 hidden md:flex flex-col">
      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        ProgressOS
      </h1>

      <nav className="space-y-2">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}