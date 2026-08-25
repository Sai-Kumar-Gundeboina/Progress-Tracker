import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="flex bg-slate-950">
      <Sidebar />
      <Dashboard />
    </div>
  );
}