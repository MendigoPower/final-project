import  { React, useEffect, useState, useRef } from 'react'
import { createUser } from '../../helpers/createUser'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AiFillSave} from 'react-icons/ai'
import { SlArrowRight } from 'react-icons/sl'
import {TbOmega} from 'react-icons/tb'
import {FaEye} from 'react-icons/fa'

export default function SignUp() {
    const navigate = useNavigate()
    const { signup } = useAuth()
    const inputName = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (error !== '') {
            inputName.current.focus()
        }
    }, [error])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const nameNoSpace = inputName.current.value.replace(/\s/g, '')
        const user = {
            username: nameNoSpace,
            email: inputEmail.current.value,
            password: inputPassword.current.value,
            photoId: `https://avatars.dicebear.com/api/bottts/${nameNoSpace}.svg`
        }
        if (user.username && user.email && user.password !== '' && user.password.length >= 6) {
            try{
                setError('')
                setLoading(true)
                let signUp = await createUser(user)
                await signup(user.username, signUp.uid, user.photoId)
            }
            catch{
                setError('Failed to create an account')
            }
        }
        else (
            setError('Failed to create an account')
        )
        setLoading(false)

    }
    return (
        <div >
            <div className='py-24 laptop:mx-48 tablet:mx-36 mobile:mx-12 mx-8'>
                <h1 className='text-5xl mb-10 font-bold'>Create a Account</h1>
                <div className='laptop:grid relative grid-cols-2'>
                    <div className=" flex flex-col ">
                        <div>
                            <div className='w-3/4'>
                                {error && <p className='text-red-500'>{error}</p>}
                                <form onSubmit={handleSubmit} className='flex flex-col '>
                                    <div className='pb-3 w-full'>

                                        <div className='w-full'>
                                            <div className='py-2'>
                                                <label className='text-lg' htmlFor="Password">Name</label>
                                            </div>
                                            <div className='min-w-full '>
                                                <input className='min-w-full h-12 rounded-lg border-solid border-2 border-gray-400 indent-4 outline-blue-700 focus:shadow-button-shadow focus:shadow-blue-900 transition-all duration-300 ease-linear' ref={inputName} type="name" placeholder='Name' />
                                            </div>
                                        </div>

                                        <div className='w-full'>
                                            <div className='py-2'>
                                                <label className='text-lg' htmlFor="Email">Email</label>
                                            </div>
                                            <div className='min-w-full'>
                                                <input className='min-w-full h-12 rounded-lg border-solid border-2 border-gray-400 indent-4 outline-blue-700 focus:shadow-button-shadow focus:shadow-blue-900 transition-all duration-300 ease-linear' ref={inputEmail} type="email" placeholder='name@name.com' />
                                            </div>
                                        </div>


                                        <div className='w-full'>
                                            <div className='py-2'>
                                                <label className='text-lg' htmlFor="Password">Password</label>
                                            </div>
                                            <div className='min-w-full '>
                                                <input className='min-w-full h-12 rounded-lg border-solid border-2 border-gray-400 indent-4 outline-blue-700 focus:shadow-button-shadow focus:shadow-blue-900 transition-all duration-300 ease-linear' ref={inputPassword} type="password" placeholder='6+ Characters' />
                                            </div>
                                        </div>

                                        <div className='pt-10 ml-2'>
                                            <button className='py-3 px-16 rounded-md text-lg w-fit bg-medium-grey hover:bg-zinc-800 text-gray-200 hover:text-white transition-all duration-300 ease-linear' disabled={loading} type='submit'>Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>



                    <div className='laptop:pt-0 pt-16'>
                        <div>
                            <h2 className='text-2xl font-bold my-5'></h2>
                            <h2 className='pt-5 pb-4' >Here are some of the benefits you’ll enjoy:</h2>
                            <div className='text-xl'>
                                <ul>
                                    <li className='flex items-center py-2'>
                                        < AiFillSave />
                                        <div className='pl-5'>
                                            <p>Check and save your favorite games.</p>
                                        </div>
                                    </li>
                                    <li className='flex items-center py-2'>
                                        < FaEye />
                                        <div className='pl-5'>
                                            <p>- Keep an eye on the last releases of games.</p>
                                        </div>
                                    </li>
                                    <li className='flex items-center py-2'>
                                        < TbOmega />
                                        <div className='pl-5'>
                                            <p>Discover everything about a game.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className='py-5 flex'>
                                <h3 className='text-xl font-bold'>Already have an account?</h3>
                                <div>
                                    <a href="/login" className='ml-5 text-xl text-blue-700 hover:text-blue-500 font-bold'>Log In</a>
                                </div>
                                <SlArrowRight className='mx-3 my-auto text-blue-700 font-bold' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
