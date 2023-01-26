import React from "react"
import { CheckCircleIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline"

import { getTimelyGreeting } from "../../utils/dateTimeHelpers"

const user = {
  profilePicture: "/favicon.svg",
  firstName: "Mike",
  lastName: "Hawk",
  facility: "St. Isaacs",
  title: "Director of Materials Management"
}

const DashboardPanel = () => {
  const greeting = getTimelyGreeting()

  return (
    <section className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <img
                className="hidden h-16 w-16 rounded-full sm:block"
                src={user.profilePicture}
                alt="profile-picture"
              />
              <div>
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-full sm:hidden"
                    src={user.profilePicture}
                    alt="profile-picture"
                  />
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    {greeting}, {user.firstName} {user.lastName}
                  </h1>
                </div>

                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                    <BuildingOfficeIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {user.facility}
                  </dd>
                  <dt className="sr-only">Account Status</dt>
                  <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                    <CheckCircleIcon 
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    {user.title}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPanel