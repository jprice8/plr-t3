import React from "react";
import { WeeksListRow } from "../../types/resetTypings";
import ResetWeekRow from "./ResetWeekRow";

interface Props {
  weeksListData: WeeksListRow[];
  currentWeek: string
}

const ResetWeeksList = ({ weeksListData, currentWeek }: Props) => {
  const newFormLinks = [];
  for (let idx in weeksListData) {
    console.log(idx)
    newFormLinks.push(
      <ResetWeekRow
        key={idx}
        currentWeek={currentWeek}
        weekNumber={weeksListData[idx]?.weekNumber}
        submissionStatus={weeksListData[idx]?.submissionStatus}
      />
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mt-10 overflow-hidden bg-white shadow-md sm:rounded-md">
        <ul className="divide-y divide-gray-200">{newFormLinks}</ul>
      </div>
    </div>
  );
};

export default ResetWeeksList;
