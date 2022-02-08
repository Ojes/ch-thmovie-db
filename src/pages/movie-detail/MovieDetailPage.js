import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Icon from '../../components/Icon';
import Poster from '../../components/Poster';
import { getMovieById } from '../../atoms/MovieResultsAtom';
import { useEffect } from 'react';
import { useAtom } from 'jotai';

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
  padding-bottom: 80px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
`;

const PosterWrapper = styled.div`
  flex: 1 1 33%;
  height: 400px;
`;

const InfoWrapper = styled.div`
  flex: 1 1 66%;
  max-width: 66%;
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
  const params = useParams();
  const [movie, updateMovie] = useAtom(getMovieById);

  useEffect(() => {
    updateMovie(params.id);
    //eslint-disable-next-line
  }, [params.id]);

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
          <Poster {...movie} fullHeight={true} />
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
