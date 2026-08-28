const STORAGE_KEY = "progress-os-roadmaps";

export const storageService = {
  loadRoadmaps() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);

      if (!data) {
        return null;
      }

      return JSON.parse(data);
    } catch (error) {
      console.error("Failed to load roadmaps:", error);
      return null;
    }
  },

  saveRoadmaps(roadmaps) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(roadmaps)
      );
    } catch (error) {
      console.error("Failed to save roadmaps:", error);
    }
  },

  clearRoadmaps() {
    localStorage.removeItem(STORAGE_KEY);
  },
};