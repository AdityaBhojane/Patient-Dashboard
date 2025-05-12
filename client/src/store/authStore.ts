import { create } from "zustand";


interface AuthState {
    token: string | null;
    setToken: (newToken: string) => void;
    setClearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem('token') || null,
    setToken: (newToken: string) => {
        localStorage.setItem('token', newToken);
        set({ token: newToken });
    },
    setClearAuth:()=>{
        localStorage.removeItem('token');
    }
}));