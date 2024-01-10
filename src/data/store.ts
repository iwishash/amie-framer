import { create } from "zustand";

type FeaturedCard = {
  inViewFeaturedCard: string | null;
  setinViewFeaturedCard: (state: string | null) => void;
  visualImage: string | null;
  setVisualImage: (state: string | null) => void;
  lastVisualImage: string | null;
  setLastVisualImage: (state: string | null) => void;
};

export const useFeatureStore = create<FeaturedCard>((set) => ({
  inViewFeaturedCard: null,
  setinViewFeaturedCard: (state) => set({ inViewFeaturedCard: state }),
  visualImage: null,
  setVisualImage: (state) => {
    set({ visualImage: state });
    if (state !== null) {
      set({ lastVisualImage: state });
    }
  },
  lastVisualImage: null,
  setLastVisualImage: (state) => set({ lastVisualImage: state }),
}));
