import { Link } from 'react-router-dom';
import Poster from '../../../components/Poster';

const Movie = ({ to, size, className, ...info }) => {
  return (
    <Link to={`/movie-details/${info?.id}`} className={className}>
      <Poster {...info} />
    </Link>
  );
};

export default Movie;
