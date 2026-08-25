import TopBar from "../components/TopBar";
import ProgressCard from "../components/ProgressCard";
import ProgressRing from "../components/ProgressRing";

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-slate-950 min-h-screen">
      <TopBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <ProgressCard title="Current Roadmap" value="LLD" color="#60A5FA" />
        <ProgressCard title="Completed Topics" value="7" color="#22C55E" />
        <ProgressCard title="Streak" value="🔥 6 Days" color="#F59E0B" />
      </div>

      <div className="mt-8">
        <ProgressRing />
      </div>
    </div>
  );
}