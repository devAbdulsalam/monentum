// import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Index from './components/Index';
import Error from './components/Error';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Welcome />} />
        <Route  path='/index' element={<Index/>} />
        <Route  path='*' element={<Error/>} />
      </Routes>
  </Router>
  );
}
export default App;
