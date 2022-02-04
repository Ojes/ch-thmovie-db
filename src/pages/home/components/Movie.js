import { useUpdateAtom } from 'jotai/utils';
import { useNavigate } from 'react-router-dom';
import { movieSelectedAtom } from '../../../atoms/MovieDetailAtoms';
import Poster from '../../../components/Poster';

const Movie = ({ to, size, className, ...info }) => {
  const navigate = useNavigate();
  const selectMovie = useUpdateAtom(movieSelectedAtom);

  const handleGoToDetails = () => {
    selectMovie(info);
    navigate(to);
  };

  return <Poster tabIndex={0} className={className} {...info} onClick={handleGoToDetails}></Poster>;
};

export default Movie;
