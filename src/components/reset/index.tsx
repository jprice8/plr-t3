import React from 'react'
import { api } from '../../utils/api';
import ResetPanel from './ResetPanel';
import ResetWeeksList from './ResetWeeksList';

const ResetContainer = () => {
  const weeksListData = api.reset.getResetWeeksListData.useQuery()
  const currentWeek = "5"
  const currentYear = "2023"

  return (
    <div className='w-screen'>
      <ResetPanel currentWeek={currentWeek} currentYear={currentYear} />
      <ResetWeeksList weeksListData={weeksListData.data ?? []} currentWeek={currentWeek} />
    </div>
  )
}

export default ResetContainer