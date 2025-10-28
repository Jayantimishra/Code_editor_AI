import SignInFormClient from '@/features/auth/components/signin-form-client'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <>
        <Image src={"/signin.svg"} alt="Login-Image" height={200} 
        width={200}
        className='m-6 object-cover'
        />
        <SignInFormClient/>
    </>
  )
}

export default SignInPage