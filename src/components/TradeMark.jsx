import React from 'react'

const TradeMark = () => {
  return (
    <div className="fixed w-full bottom-0">      
        <div className="text-center p-6 bg-gray-500 font-semibold"> Copyright &copy; <span>{new Date().getFullYear().toString()} </span>
          <a  className="text-blue-900 hover:text-blue-800 font-semibold" href="https://devabdulsalam.netlify.app" target="_blank" rel='noreferrer'>Dev.Abdulsalm.js</a>
          <a href="https://twitter.com/MMAbdulsalam001" target="_blank" rel='noreferrer' className="mx-2 twitter"><i className="text-blue-700 fas fa fa-twitter "></i></a>
          <a href="https://github.com/devAbdulsalam" target="_blank" rel='noreferrer' className="mx-2 github"><i className="fas fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/abdulsalammmuftua/" target="_blank" rel='noreferrer' className="mx-2 text-white linkedin"><i className="fas fa fa-linkedin"></i></a>
        </div>
    </div>
  )
}

export default TradeMark