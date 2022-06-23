import React from 'react'
import { IncludesTypes } from 'utils/types'
import { Wrapper } from 'components/shared'


interface FeatureInterface {
    includes: IncludesTypes[]
    feature: string
}

function Feature({includes, feature}:FeatureInterface) {
  return (
    <section className='py-[100px] px-pad' >
        <Wrapper>
            <div className='flex flex-col gap-[88px] lg:flex-row' >

                <div className='flex flex-col gap-[32px] lg:flex-[2] ' >
                    <h3 className='uppercase' >features</h3>
                    <div className='flex flex-col gap-[12px] opacity-50'>
                        <p>
                            {feature.slice(0, 354)}
                        </p>
                        <p>
                            {feature.slice(354)}
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-[24px] md:flex-row md:gap-[170px] lg:flex-col lg:gap-[32px] lg:flex-1' >
                    <h3  className='uppercase' >
                        in the Feature
                    </h3>
                    <div className='' >
                        {includes.map((item,index) => (
                            <div key={index} className='flex gap-[24px] ' >
                                <p className='font-bold text-pry ' >{item.quantity}x</p>
                                <p className='opacity-50 font-medium' >{item.item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Feature
