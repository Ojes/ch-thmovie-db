import Movie from './Movie';
import styled from 'styled-components';

const ItemsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
`;

const ItemWrapper = styled(Movie)`
  box-sizing: border-box;
  flex: 1;
  flex-basis: ${({ size }) => `${size || 100}%`};
  max-width: ${({ size }) => `${size || 100}%`};
  padding: 5px;
`;

const MovieBox = ({ collection, itemPerRow = 5 }) => (
  <ItemsWrapper>
    {collection &&
      collection.map((item) => (
        <ItemWrapper key={item.id} {...item} to={`/movie-details/${item?.id}`} size={100 / itemPerRow}>
          <ItemWrapper />
        </ItemWrapper>
      ))}
  </ItemsWrapper>
);

export default MovieBox;
