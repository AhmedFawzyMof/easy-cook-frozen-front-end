import { create } from "zustand";

type AuthStore = {
  isAuthenticated: boolean;
  token: string;
  isLogedIn: () => void;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  token: "",
  isLogedIn: () => {
    set((state) => {
      const token: string | null = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
        return state;
      }
      return state;
    });
  },
  login: (token: string) => {
    set((state) => {
      localStorage.setItem("token", token);
      state.isAuthenticated = true;
      state.token = token;
      return state;
    });
  },
  logout: () => {
    set((state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.token = "";
      return state;
    });
  },
}));
