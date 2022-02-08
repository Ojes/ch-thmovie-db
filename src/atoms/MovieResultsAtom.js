import { atom } from 'jotai';
import { atomWithQuery } from 'jotai/query';
import { getRequest } from '../helpers/http';

export const requestControllerAtom = atom('discover/movie');
export const requestParamsAtom = atom('');

export const resultOfMoviesAtom = atomWithQuery((get) => ({
  queryKey: [get(requestControllerAtom), get(requestParamsAtom)],
  queryFn: async ({ queryKey: [endpoint, query] }) => {
    const res = await getRequest(endpoint, { query });
    return res.json();
  },
}));

export const getMovieById = atom(null, (get, set, value) => {
  let movie = null;

  try {
    movie = get(resultOfMoviesAtom)?.results.find((movie) => movie.id === +value);
  } catch {}
  set(getMovieById, movie);
});
