export default function ProgressCard({ title, value, color }) {
  return (
    <div className="rounded-2xl bg-slate-800 p-6 border border-slate-700">
      <p className="text-slate-400 text-sm">{title}</p>

      <h3
        className="text-3xl font-bold mt-3"
        style={{ color }}
      >
        {value}
      </h3>
    </div>
  );
}