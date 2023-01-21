import Image from 'next/image';
import React from 'react'

import DotLoader from "react-spinners/DotLoader"

const Loader = () => {
  return (
    <div>
      <div>
        <span>
          <Image
            src="https://rb.gy/y9mwtb"
            alt=""
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>
        <DotLoader size={23} color="#ffffff" />
      </div>
    </div>
  )
}

export default Loader