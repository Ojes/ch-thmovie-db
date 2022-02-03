import { atom } from 'jotai';

const ratingValueAtom = atom(0);

export const ratingAtom = atom(
  (get) => get(ratingValueAtom),
  (get, set, newRating) => {
    set(ratingValueAtom, (oldRating) => (newRating === oldRating ? 0 : newRating));
  }
);
