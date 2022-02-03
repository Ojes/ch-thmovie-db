import { atom } from 'jotai';
import { atomWithQuery } from 'jotai/query';
import { getRequest } from '../helpers/http';

export const discoveryMovies = atom([]);

export const discoveryMoviesAtom = atomWithQuery((get) => ({
  queryKey: 'discovery-movies',
  queryFn: async ({ queryKey }) => {
    const res = await getRequest('discover/movie');
    return res.json();
  },
}));
