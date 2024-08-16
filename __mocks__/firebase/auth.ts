import { vi } from 'vitest';

export const signInWithEmailAndPassword = vi.fn();
export const signInWithPopup = vi.fn();
export const signOut = vi.fn();
export const onAuthStateChanged = vi.fn();
export const getAuth = vi.fn(() => ({
  currentUser: null,
}));
