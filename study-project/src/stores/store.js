import { create } from 'zustand';

export const useBearStore = create((set) => ({
	bears: 0,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));

export const useUserStore = create((set) => ({
	// user: { id: 'ko', name: 'ko', role: 'admin' },
	// user: { id: 'ko', name: 'ko', role: 'member' },
	user: { id: '', name: '', role: '' },

	login: (user) => set({ user }),
	logout: () => set({ user: { id: '', name: '', role: '' } }),
}));
