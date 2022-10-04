import React from 'react'

const TodaysDate = () => {
    let today = new Date()
    let date = today.getDate() + '/' + today.getMonth() + '/' +today.getFullYear()
    // console.log(date)
  return (
    <div>
        <p className='text-white text-xl font-bold'>{date}</p>
    </div>
  )
}

export default TodaysDate