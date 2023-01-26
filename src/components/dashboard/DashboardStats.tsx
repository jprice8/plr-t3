import React from "react";
import {
  ArrowTrendingDownIcon,
  BanknotesIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usdTwoDigits } from "../../utils/helperFuncs";

const metrics = [
  { id: 1, metric: "Inventory Reduced", value: 8000 },
  { id: 2, metric: "Weeks Completed", value: 3 },
  { id: 3, metric: "Pars Reduced", value: 5 },
];

const icons = [
  <BanknotesIcon className="h-6 w-6 text-white" aria-hidden="true" />,
  <ClockIcon className="h-6 w-6 text-white" aria-hidden="true" />,
  <ArrowTrendingDownIcon className="h-6 w-6 text-white" aria-hidden="true" />,
];

const DashboardStats = () => {
  return (
    <section className="pt-3 lg:mx-auto lg:max-w-6xl">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                {icons[item.id - 1]}
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.metric}
              </p>
            </dt>

            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.id === 1 && usdTwoDigits(item.value)}
                {item.id > 1 && item.value}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link
                    href="/statsList"
                    className="font-medium text-indigo-600 hover:text-indigo-400"
                  >
                    {" "}
                    View all<span className="sr-only"> {item.metric} </span>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default DashboardStats;
