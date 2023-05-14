import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import WishList from './pages/WishList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/WishList' element={<WishList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
