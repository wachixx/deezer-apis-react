import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import HomePage from  "./pages/HomePage";
import ArtistDetails from  "./pages/ArtistDetails";
import NotFound from  "./pages/ArtistDetails";

function App() {
  return (
    <Router>
      <SearchBar/>
      <Routes>
           <Route exact path="/" element={<HomePage/>} />
           <Route path="/artist/:artist_id" element={<ArtistDetails/>} />
           <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
