import React, { useEffect } from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css'

const AosPractice = () => {
    useEffect(() => {
        // Aos.init({duration: 2000});
        console.log("my name")
    },[]);

  return (
    <div>
        <h2>Aos Practice</h2>
        <div className='w-10/12 mx-auto grid grid-cols-2 gap-3 space-x-3 justify-center items-center'>
            <div className='bg-blue-300  p-3 h-40'>
                i an a box
            </div>
            <div className='bg-blue-300  p-3 h-40'>
                i an a box
            </div>
            <div className='bg-blue-300 p-3 h=40'>
                i an a box
            </div>
            <div className='bg-blue-300 p-3 h=40'>
                i an a box
            </div>
            <div className='bg-blue-300 p-3 h=40'>
                i an a box
            </div>
            <div className='bg-blue-300 p-3 h=40'>
                i an a box
            </div>
              


        </div>
    </div>
  )
}

export default AosPractice