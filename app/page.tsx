'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import { useRouter } from 'next/router';
import Link from "next/link";


function Login() {
    

  const handleButtonClick = () => {
  };
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center
    justify-center text-center ">
        <Image
            src="https://links.papareact.com/2i6"
            width={300}
            height={300} 
            alt="logo"
        />
        <Link href="/MainPage">
        <button onClick={handleButtonClick} className="text-white font-bold text-3xl animate-pulse">Sign in to use ChatGPT</button>
        </Link>

    </div>
  )
}

export default Login