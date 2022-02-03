import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';
import MovieDetailPage from './pages/movie-detail/MovieDetailPage';

function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-details/:id" element={<MovieDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouting;
