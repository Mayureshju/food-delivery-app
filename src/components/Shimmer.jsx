import React from 'react'
import "./Shimmer.css"
const Shimmer = () => {
  return (
    <div className='cards'>{
      Array(10).fill("").map((e,index)=>{
        return <div key={index} className='shimmer-card'></div>
      })
    }
    </div>
  )
}

export default Shimmer