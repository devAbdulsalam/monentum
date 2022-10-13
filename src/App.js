// import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Error from './components/Error';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Welcome />} />
        <Route  path='/home' element={<Home/>} />
        <Route  path='*' element={<Error/>} />
      </Routes>
  </Router>
  );
}

export default App;
