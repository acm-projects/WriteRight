import create from "zustand";

export const useLoginStore = create((set) => ({
  login: false,
  signIn: () => set((state) => ({ login: true })),
  signOut: () => set((state) => ({ login: false })),
  globalUsername: "",
  setGlobalUserName: (globalUsername) => set({ globalUsername }),
}));
