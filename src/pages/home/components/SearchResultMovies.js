import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import Icon from '../../../components/Icon';
import { ratingAtom } from '../../../atoms/RatingAtoms';
import MovieBox from './MoviesBox';
import Rating from './Rating';
import { resultOfMoviesAtom } from '../../../atoms/MovieResultsAtom';

const HeaderWrapper = styled.article`
  display: flex;
  justify-content: space-between;
`;

const InfoWrapper = styled.p`
  background: #e1e1e1;
  margin: 16px auto 0;
  padding: 8px 16px;
  width: fit-content;
`;

const SearchResultMovies = () => {
  const [{ results }] = useAtom(resultOfMoviesAtom);
  const [filterRatingValue, setFilterRating] = useAtom(ratingAtom);
  const [resultFiltered, filterMovieByRating] = useState(results);

  useEffect(() => {
    const data =
      filterRatingValue === 0
        ? results
        : results.filter(({ vote_average }) => vote_average >= filterRatingValue - 2 && vote_average <= filterRatingValue);
    filterMovieByRating(data);
  }, [results, filterRatingValue]);

  return (
    <article>
      <HeaderWrapper>
        <h2>
          <Icon ico="search"></Icon> Search result
        </h2>
        <div>
          <p>
            Filter by rating <Rating count={5} selected={filterRatingValue} onChange={setFilterRating} />
          </p>
        </div>
      </HeaderWrapper>
      {resultFiltered.length ? (
        <MovieBox collection={resultFiltered} />
      ) : (
        <InfoWrapper>
          <Icon ico="exclamation-circle" />
          No results were found with these search criteria
        </InfoWrapper>
      )}
    </article>
  );
};
export default SearchResultMovies;
