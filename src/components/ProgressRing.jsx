export default function ProgressRing() {
  return (
    <div className="rounded-3xl bg-slate-800 p-8 border border-slate-700 flex flex-col items-center">
      <div className="w-40 h-40 rounded-full border-[12px] border-blue-500 flex items-center justify-center">
        <span className="text-4xl font-bold text-white">
          25%
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        Overall Progress
      </h3>

      <p className="text-slate-400">
        7 of 28 topics complete
      </p>
    </div>
  );
}