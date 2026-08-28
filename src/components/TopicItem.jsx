import { Check, Circle } from "lucide-react";

export default function TopicItem({ topic, onToggle }) {
  return (
    <button
      onClick={() => onToggle(topic.id)}
      className="w-full flex items-center gap-4 p-4 rounded-xl
                 bg-slate-900/60 border border-slate-800
                 hover:border-slate-700 hover:bg-slate-800/80
                 transition-all duration-200 text-left"
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center
          ${
            topic.completed
              ? "bg-green-500 text-white"
              : "border-2 border-slate-600 text-slate-600"
          }`}
      >
        {topic.completed ? (
          <Check size={16} strokeWidth={3} />
        ) : (
          <Circle size={10} fill="currentColor" />
        )}
      </div>

      <span
        className={`flex-1 ${
          topic.completed
            ? "text-slate-500 line-through"
            : "text-slate-200"
        }`}
      >
        {topic.title}
      </span>
    </button>
  );
}