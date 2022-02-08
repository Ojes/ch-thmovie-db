import { useAtom } from 'jotai';
import styled from 'styled-components';
import Icon from '../../../components/Icon';
import Movie from './Movie';
import MovieBox from './MoviesBox';
import { requestControllerAtom, requestParamsAtom, resultOfMoviesAtom } from '../../../atoms/MovieResultsAtom';
import { useEffect } from 'react';
import { useUpdateAtom } from 'jotai/utils';

const SectionWrapper = styled.article`
  display: block;
`;

const ContentWrapper = styled.article`
  display: flex;
`;

const BestMovieWrapper = styled.article`
  flex: 1 1 33%;
  height: 440px;
`;

const MoviesWrapper = styled.article`
  flex: 1 1 66%;
  height: 440px;
  overflow: hidden;
`;

const PopularMovies = () => {
  const setNewQuery = useUpdateAtom(requestControllerAtom);
  const setQueryParams = useUpdateAtom(requestParamsAtom);
  const [{ results = [] }] = useAtom(resultOfMoviesAtom);
  const [mostPopular, ...rest] = results.slice(0, 9).sort((r, l) => l.vote_average - r.vote_average);

  useEffect(() => {
    setNewQuery('discover/movie');
    setQueryParams('');
    //eslint-disable-next-line
  }, []);

  return (
    <SectionWrapper>
      <header>
        <h2>
          <Icon ico="fire"></Icon> Popular Movies
        </h2>
      </header>
      <ContentWrapper>
        <BestMovieWrapper>
          <Movie {...mostPopular} fullHeight={true} />
        </BestMovieWrapper>
        <MoviesWrapper>
          <MovieBox collection={rest} itemPerRow={4} />
        </MoviesWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default PopularMovies;
