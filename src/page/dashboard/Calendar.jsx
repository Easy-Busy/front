// ✅ Calendar.jsx
import React from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(isoWeek);
dayjs.extend(weekday);

const Calendar = () => {
  const today = dayjs();
  const startOfMonth = today.startOf("month");
  const endOfMonth = today.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const dates = [];
  let date = startDate;
  while (date.isBefore(endDate, "day") || date.isSame(endDate, "day")) {
    dates.push(date);
    date = date.add(1, "day");
  }

  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  const dayLabels = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="flex-1 bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {today.format("YYYY년 M월")}
        </h2>
        <div>
          <select className="border px-2 py-1 text-sm rounded">
            <option value="month">month</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {dayLabels.map((day, i) => (
          <div
            key={i}
            className="bg-white text-center font-medium text-gray-600 py-2"
          >
            {day}
          </div>
        ))}
        {weeks.map((week, i) => (
          <React.Fragment key={i}>
            {week.map((date, j) => (
              <div
                key={j}
                className={`h-20 p-1 text-sm text-gray-700 bg-white border border-gray-200 align-top relative`}
              >
                {date.date()}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
