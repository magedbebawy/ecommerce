import './App.css';
import MyNav from './components/nav/Nav';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className='App'>
          <MyNav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" component='' />
            <Route path="/contact" component='' />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
