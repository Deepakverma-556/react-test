import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import MyCard from './components/MyCard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<MyCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
