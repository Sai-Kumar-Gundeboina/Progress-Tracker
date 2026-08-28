import Sidebar from "./components/SideBar";
import Roadmap from "./pages/RoadMap";
import { roadmaps } from "./data/roadmaps";
import { useRoadmaps } from "./hooks/useRoadmaps";

export default function App() {
  const {roadmaps, setRoadmaps} = useRoadmaps();

  const lldRoadmap = roadmaps.find(
    (roadmap)=>roadmap.id === "lld"
  );

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <Roadmap 
        roadmap={lldRoadmap}
        setRoadmaps= {setRoadmaps} />
    </div>
  );
}