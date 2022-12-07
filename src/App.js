import './style.css'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DataContext from './context/DataContext';
import List from './components/List';
import Add from './components/Add';
import Details from './components/Details';
import Favorite from './components/Favorite';
import Header from './components/Header';


function App() {
  return (
    <div className="app-container">
      <DataContext>
        <Header />
        <Routes>
          <Route index element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </DataContext>
    </div>
  );
}

export default App;
