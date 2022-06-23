import React from 'react'

function Counter() {
  return (
    <div className='flex w-[120px] h-[48px] items-center justify-center gap-[15px] bg-gray ' >
        <button className='counter-btn ' >-</button>
        <p>1</p>
        <button className='counter-btn ' >+</button>
    </div>
  )
}

export default Counter