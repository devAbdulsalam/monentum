import React from 'react'
import Weather from './Weather';
import TodaysDate from './TodaysDate';
import Time from './Time';
import Quotes from './Quotes';
import TradeMark from './TradeMark';
import {motion} from 'framer-motion'

const Index = () => {
  return (
    <motion.div initial={{width : 0}} animate={{width : '100%', transition : "1s"}} exit={{x: window.innerWidth, transition : "1s"}} >
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
    </motion.div>
  )
}

export default Index