import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'
import React from "react";
import NewChat from '@/components/NewChat';
import { getServerSession } from 'next-auth';
import { SessionProvider } from '@/components/SessionProvider';


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  {/*const session = await getServerSession{authOptions}*/}

  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
export default RootLayout

 
 

