import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className=' bg-background tracking-wide w-full xl:max-w-[1400px] mx-auto py-8'>
        {props.children}
    </div>
  )
}

export default Layout