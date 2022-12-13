import React from 'react'

export default function Information({ keywords, perspective, release, modes, }) {
    return (
        <div className='px-12 text-4xl'>
            <div className='my-12'>
                <div className=' md:max-w-2xl mx-auto rounded-md bg-light-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear'>
                    <div className=' px-12 md:text-3xl sm:text-2xl text-xl'>
                        <ul className='grid  grid-cols-2 min-h-full'>
                            <li className='py-10'>Player Perspective: </li>
                            <ul className='py-10 '> {perspective ? perspective.map((perspective) => <li className='ml-1 mr-1' key={perspective.id}>{perspective.name}</li>) : null}</ul>
                        </ul>
                        <ul className='grid  grid-cols-2 min-h-full '>
                            <li className='py-10 '>Game Modes: </li>
                            <ul className='py-10 '> {modes ? modes.map((modes) => <li className='' key={modes.id}>{modes.name}</li>) : null} </ul>
                        </ul>
                        <ul className='grid  grid-cols-2 min-h-full'>
                            <li className='py-10'>Release Dates: </li>
                            <ul className='py-10'> {release ? release.map((release) => <li className='md:my-2 my-1' key={release.id}>{release.human}</li>) : null} </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}