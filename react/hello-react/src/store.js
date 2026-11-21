import { create } from 'zustand'

// Global store: any component can read/update the counter
export const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}))