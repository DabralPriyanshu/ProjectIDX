import { create } from "zustand";
export const useEditorSocketStore = create((set) => {
  return {
    socket: null,
    setSocket: (incomingSocket) => {
      set({ socket: incomingSocket });
    },
  };
});
