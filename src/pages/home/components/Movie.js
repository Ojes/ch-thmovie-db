import { useUpdateAtom } from 'jotai/utils';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import noPosterAvailable from '../../../assets/noPosterAvailable.png';
import { movieSelectedAtom } from '../../../atoms/MovieDetailAtoms';

const ImgWraper = styled.div`
  height: ${({ fullHeight }) => (!!fullHeight ? '100%' : '220px')};
  pointer-events: ${({ disable }) => (disable ? 'none' : 'auto')};
  position: relative;
  width: 100%;
`;

const ImgElement = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Movie = ({ className, fullHeight, to, ...info }) => {
  const { title, poster_path } = info;
  const navigate = useNavigate();
  const selectMovie = useUpdateAtom(movieSelectedAtom);
  const imageUrl = poster_path ? `${process.env.REACT_APP_THEMOVIEDB_POSTER_URL}${poster_path}` : noPosterAvailable;

  const handleGoToDetails = () => {
    selectMovie(info);
    navigate(to);
  };

  return (
    <ImgWraper tabIndex={0} className={className} fullHeight={fullHeight} onClick={handleGoToDetails}>
      <ImgElement alt={`${title} Poster`} src={imageUrl} />
    </ImgWraper>
  );
};

export default Movie;
