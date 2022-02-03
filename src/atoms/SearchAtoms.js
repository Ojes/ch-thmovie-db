import { atom } from 'jotai';
import { atomWithQuery } from 'jotai/query';
import { getRequest } from '../helpers/http';

export const searchTextAtom = atom('');

export const searchResultMovies = atom([]);

export const searchMoviesAtom = atomWithQuery((get) => ({
  queryKey: ['search-movies', get(searchTextAtom)],
  queryFn: async ({ queryKey: [, query] }) => {
    const res = await getRequest('search/movie', { query });
    return res.json();
  },
}));
