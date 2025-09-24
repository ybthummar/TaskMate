import React from 'react'
import UI_IMG from '../../assets/auth-img.png'
export const AuthLayout = ({children}) => {
  return <div className='flex'>
    <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>TaskMate</h2>
        {children}
    </div>

    <div className='hidden md:flex w-[40vw] h-screen item-center justify-center bg-blue-50 bg-no-repeat bg-center overflow-hidden lg:w-[90%]'>
        <img src={UI_IMG} alt="auth-img" className=''/>
    </div>
  </div>
}
