import React from 'react'
import Image from 'next/image'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex justify-center items-center h-screen flex-col '>
        <Image
        src="/bg.jpg"
        alt="Auth Background"
        fill
        priority
        className="object-cover -z-10"
      />
        {children}
    </main>
  )
}

export default AuthLayout;