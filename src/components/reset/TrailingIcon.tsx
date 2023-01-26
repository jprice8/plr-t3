import { CheckIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline"
import React, { Fragment } from "react"

const TrailingIcon = (status?: string) => {
  if (status === "Submitted") {
    return (
      <Fragment>
        <CheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Fragment>
    )
  } else if (status === "Missed") {
    return (
      <Fragment>
        <XMarkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Fragment>
    )
  } else if (status === "New") {
    return (
      <Fragment>
        <ChevronRightIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Fragment>
    )
  }
}

export default TrailingIcon