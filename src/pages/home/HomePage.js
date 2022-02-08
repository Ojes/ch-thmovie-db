import { Suspense } from 'react';
import { useAtomValue } from 'jotai/utils';
import SearchResultMovies from './components/SearchResultMovies';
import PopularMovies from './components/PopularMovies';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import ContainerWrapper from '../../components/Container';
import { requestParamsAtom } from '../../atoms/MovieResultsAtom';

const HomePage = () => {
  const searchText = useAtomValue(requestParamsAtom);
  return (
    <>
      <Header>
        <SearchBox />
      </Header>
      <ContainerWrapper>
        <Suspense fallback="...loading">{searchText ? <SearchResultMovies /> : <PopularMovies />}</Suspense>
      </ContainerWrapper>
    </>
  );
};

export default HomePage;
