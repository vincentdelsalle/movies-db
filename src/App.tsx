import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MovieDetailsPage } from './pages/MovieDetails';
import { TopBar } from './containers/TopBar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie-details/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
