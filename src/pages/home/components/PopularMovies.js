import { useAtom } from 'jotai';
import styled from 'styled-components';
import Icon from '../../../components/Icon';
import { discoveryMoviesAtom } from '../../../atoms/DiscoveryAtoms';
import Movie from './Movie';
import MovieBox from './MoviesBox';

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
  const [{ results = [] }] = useAtom(discoveryMoviesAtom);
  const [mostPopular, ...rest] = results.slice(0, 9).sort((r, l) => l.vote_average - r.vote_average);

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
