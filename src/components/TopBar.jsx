export default function TopBar() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <header className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold text-white">
          {greeting}, Sai 👋
        </h2>

        <p className="text-slate-400 mt-1">
          Keep building your skills every day.
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
        S
      </div>
    </header>
  );
}