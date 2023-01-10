import React from 'react'

export default function Summary({summary}) {

  return (
    <div className='mt-16 min-h-fit p-16'>
        <div className='laptop:mt-24 tablet:mt-140 mobile:mt-128 mt-48 laptop:pb-12 pb-0  md:text-3xl text-2xl'>
          <h2 className='laptop:pt-0 tablet:pt-16 pt-24 tablet:text-center text-justify tablet:indent-10 mobile:leading-11 leading-10  max-w-screen-xl mx-auto '>{summary}</h2>
        </div>
    </div>
  )
}