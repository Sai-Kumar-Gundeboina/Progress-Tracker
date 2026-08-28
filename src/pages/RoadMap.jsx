import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import TopicItem from "../components/TopicItem";

export default function Roadmap({ roadmap, setRoadmaps }) {
  const [sections, setSections] = useState(
    Object.fromEntries(
      roadmap.sections.map((section) => [section.id, true])
    )
  );

  const [topics, setTopics] = useState(
    roadmap.sections.flatMap((section) => section.topics)
  );

  const toggleSection = (sectionId) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

 const toggleTopic = (topicId) => {
  setRoadmaps((prevRoadmaps) =>
    prevRoadmaps.map((roadmapItem) => {
      if (roadmapItem.id !== roadmap.id) {
        return roadmapItem;
      }

      return {
        ...roadmapItem,

        sections: roadmapItem.sections.map((section) => ({
          ...section,

          topics: section.topics.map((topic) =>
            topic.id === topicId
              ? {
                  ...topic,
                  completed: !topic.completed,
                }
              : topic
          ),
        })),
      };
    })
  );
};

  const allTopics = roadmap.sections.flatMap(
  (section) => section.topics
);

const totalTopics = allTopics.length;

const completedTopics = allTopics.filter(
  (topic) => topic.completed
).length;

const progress =
  totalTopics === 0
    ? 0
    : Math.round(
        (completedTopics / totalTopics) * 100
      );

  return (
    <div className="flex-1 min-h-screen bg-slate-950 p-6 md:p-10">
      {/* Header */}

      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{roadmap.icon}</span>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {roadmap.title}
                </h1>

                <p className="text-slate-400 mt-1">
                  {roadmap.description}
                </p>
              </div>
            </div>
          </div>

          {/* Progress */}

          <div className="hidden sm:block text-right">
            <p className="text-4xl font-bold text-blue-400">
              {progress}%
            </p>

            <p className="text-sm text-slate-500">
              {completedTopics} / {totalTopics} completed
            </p>
          </div>
        </div>

        {/* Progress Bar */}

        <div className="mb-10">
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Sections */}

        <div className="space-y-4">
          {roadmap.sections.map((section) => {
            const sectionTopics = section.topics.map((topic) => {
              return topics.find((t) => t.id === topic.id);
            });

            const sectionCompleted = sectionTopics.filter(
              (topic) => topic.completed
            ).length;

            const isOpen = sections[section.id];

            return (
              <div
                key={section.id}
                className="bg-slate-900/40 border border-slate-800
                           rounded-2xl overflow-hidden"
              >
                {/* Section Header */}

                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center gap-3 p-5
                             hover:bg-slate-800/50 transition"
                >
                  {isOpen ? (
                    <ChevronDown size={20} className="text-slate-400" />
                  ) : (
                    <ChevronRight size={20} className="text-slate-400" />
                  )}

                  <div className="flex-1 text-left">
                    <h2 className="font-semibold text-white">
                      {section.title}
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      {sectionCompleted} / {sectionTopics.length} completed
                    </p>
                  </div>

                  <span className="text-sm text-slate-500">
                    {sectionTopics.length} topics
                  </span>
                </button>

                {/* Topics */}

                {isOpen && (
                  <div className="px-5 pb-5 space-y-2">
                    {sectionTopics.map((topic) => (
                      <TopicItem
                        key={topic.id}
                        topic={topic}
                        onToggle={toggleTopic}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}