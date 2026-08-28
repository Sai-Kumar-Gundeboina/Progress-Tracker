import { useEffect, useState } from "react";
import { roadmaps as initialRoadmaps } from "../data/roadmaps";
import { storageService } from "../services/storageService";

export function useRoadmaps() {
  const [roadmaps, setRoadmaps] = useState(() => {
    const saved = storageService.loadRoadmaps();

    return saved || initialRoadmaps;
  });

  useEffect(() => {
    storageService.saveRoadmaps(roadmaps);
  }, [roadmaps]);

  return {
    roadmaps,
    setRoadmaps,
  };
}