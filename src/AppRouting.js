import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/movie-details/:id" element={<div />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouting;
