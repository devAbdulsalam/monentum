// import './App.css';
import Weather from './components/Weather';
import TodaysDate from './components/TodaysDate';
import Time from './components/Time';
import Quotes from './components/Quotes';
import TradeMark from './components/TradeMark';
// import Transit from './components/Transit';
// import AosPractice from './components/AosPractice';


function App() {
  return (
    <div>
      <div className="min-h-screen p-3 flex flex-col justify-between">
          <div className='md:w-11/12 md:mx-auto justify-self-start flex justify-between items-center p-2 m-2'>
            <Weather/>
            <TodaysDate />
          </div>
          <Time />
          <div className='justify-self-end flex space-y-6 md:py-6 md:h-80 flex-col justify-center'>
            <Quotes/>
          </div>
        <TradeMark />
      </div>
    </div>
  );
}

export default App;
