import React from "react"
import Wrapper from "./Wrapper"
import { useRouter } from "next/router"

function Navigator() {
  const router = useRouter()

  //TODO: Handle => Navigate to previous page
  const handleNavigator = () => {
    router.back()
  }
  return (
    <div className='pl-pad py-tb cursor-pointer' onClick={handleNavigator}>
      <Wrapper>
        <p className='capitalize opacity-50 font-medium '>go back</p>
      </Wrapper>
    </div>
  )
}

export default Navigator
