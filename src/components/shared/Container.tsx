import React  from 'react'
import Sidebar from './Sidebar';

interface Props {
  children: JSX.Element
}

const Container = ({ children }: Props) => {
  return (
    <main className='flex min-h-screen min-w-screen'>
      <Sidebar />
      {children}
    </main>
  )
}

export default Container