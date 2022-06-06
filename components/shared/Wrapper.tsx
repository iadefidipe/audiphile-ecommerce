import React from 'react'
interface WrapperInterface {
    children: React.ReactNode
  }
function Wrapper({children}:WrapperInterface) {
  return (
    <div className='max-w-max mx-auto' >{children}</div>
  )
}

export default Wrapper