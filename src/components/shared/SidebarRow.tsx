import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { SVGProps } from 'react'
import { classNames } from '../../utils/helperFuncs';

interface Props {
  displayName: string
  hyperlink: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const SidebarRow = ({ displayName, hyperlink, Icon }: Props) => {
  const router = useRouter()

  const isCurrent = (url: string) => {
    return router.pathname === url
  }

  return (
    <Link
      key={displayName}
      href={hyperlink}
      // className='group flex max-w-fit items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 text-white'
      className={classNames(
        isCurrent(hyperlink)
          ? "bg-gray-900 text-white"
          : "hover:bg-gray-700 hover:text-white text-gray-300",
          "px-4 py-3 rounded-md text-sm font-medium flex space-x-2 transition-all duration-200"
      )}
    >
      <Icon className='h-6 w-6' />
      <p className='hidden text-base font-light md:inline-flex lg:text-xl'>
        {displayName}
      </p>
    </Link>
  )
}

export default SidebarRow