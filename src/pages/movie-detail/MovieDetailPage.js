import { useAtomValue } from 'jotai/utils';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { movieSelectedAtom } from '../../atoms/MovieDetailAtoms';
import Movie from '../home/components/Movie';
import Icon from '../../components/Icon';

const ContentWrapper = styled.div`
  background: ${({ background }) => (background ? `url(${process.env.REACT_APP_THEMOVIEDB_POSTER_URL}${background})` : '#dbcfaf')};
  background-position: center;
  background-size: cover;
  content-justify: center;
  display: flex;
  height: 500px;
  position: relative;

  &:before {
    background-color: #dbcfaf9e;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`;

const MovieContentWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 960px;
`;
const Title = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
`;

const PosterWrapper = styled.article`
  flex: 1 1 33%;
`;

const InfoWrapper = styled.article`
  flex: 1 1 66%;
  overflow: hidden;
  padding: 10px 16px;
`;

const IconWrapper = styled(Icon)`
  padding-left: 8px;
`;

const LinkWrapper = styled(Link)`
  display: block;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const MovieDetailPage = () => {
  let navigate = useNavigate();
  const movie = useAtomValue(movieSelectedAtom);

  if (!movie) {
    navigate('/');
    return '';
  }

  return (
    <article>
      <ContentWrapper background={movie.backdrop_path}></ContentWrapper>
      <MovieContentWrapper>
        <PosterWrapper>
          <LinkWrapper to="/">
            <IconWrapper ico="arrow-left">Go Back</IconWrapper>
          </LinkWrapper>
          <Movie {...movie} fullHeight={true} disable={true} />
        </PosterWrapper>
        <InfoWrapper>
          <Title>{movie.title}</Title>
          <p>
            <IconWrapper ico="calendar">{movie.release_date ? new Date(movie.release_date).toLocaleDateString() : 'unknown'}</IconWrapper>
            {' | '}
            <IconWrapper ico="star">{movie.vote_average}</IconWrapper>
          </p>
          <p>{movie.overview}</p>
        </InfoWrapper>
      </MovieContentWrapper>
    </article>
  );
};

export default MovieDetailPage;