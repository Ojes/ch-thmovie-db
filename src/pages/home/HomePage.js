import { Suspense } from 'react';
import { useAtomValue } from 'jotai/utils';
import SearchResultMovies from './components/SearchResultMovies';
import PopularMovies from './components/PopularMovies';
import SearchBox from './components/SearchBox';
import { searchTextAtom } from '../../atoms/SearchAtoms';
import Header from './components/Header';
import ContainerWrapper from '../../components/Container';

const HomePage = () => {
  const searchText = useAtomValue(searchTextAtom);
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
