import styled from 'styled-components';
import noPosterAvailable from '../assets/noPosterAvailable.png';

const ImgWraper = styled.div`
  height: ${({ fullHeight }) => (!!fullHeight ? '100%' : '220px')};
  position: relative;
  width: ${({ fullHeight }) => (!!fullHeight ? 'auto' : '100%')};
`;

const ImgElement = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Poster = ({ className, fullHeight, onClick, ...info }) => {
  const { title, poster_path } = info;
  const imageUrl = poster_path ? `${process.env.REACT_APP_THEMOVIEDB_POSTER_URL}${poster_path}` : noPosterAvailable;

  return (
    <ImgWraper className={className} fullHeight={fullHeight} onClick={onClick}>
      <ImgElement alt={`${title} Poster`} src={imageUrl} />
    </ImgWraper>
  );
};

export default Poster;
