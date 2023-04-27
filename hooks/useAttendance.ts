import useFetch from './useFetch';

import { CalendarCellData } from 'store/dashboard';

import { API_URL_OTHER } from 'pages/api/other';

const WEEK_LENGTH = 5;

function useAttendance(attendance = '') {
  const { data } = useFetch({ url: API_URL_OTHER.WEEKDAYS });

  if (!data) return;

  const year = new Date().getFullYear();

  const month = Number(data['month']);

  const days = (data['days'] as string).split(',').map(Number);

  const day = new Date(year, month - 1, days[0]).getDay();

  const firstWeekLenght = WEEK_LENGTH - day;

  const isHoliday = (state: string) => state === 'h';

  const isFriday = (index: number) => index % WEEK_LENGTH === firstWeekLenght;

  const addWeekendCells = (calendarCell: CalendarCellData) => {
    const { month, date } = calendarCell;

    const weekendCells = [false, false].map((state, index) => {
      const currentDate = date + index + 1;
      return { month: month, date: currentDate, state };
    });

    return [calendarCell, ...weekendCells];
  };

  const calendarData = attendance
    .split('')
    .reduce(
      (
        calendarData: CalendarCellData[],
        attendancePerDay: string,
        index: number,
      ) => {
        const date = days[index];
        const state = isHoliday(attendancePerDay)
          ? false
          : !!Number(attendancePerDay);

        const calendarCell: CalendarCellData = { month, date, state };

        if (isFriday(index)) {
          const calendarCells = addWeekendCells(calendarCell);
          return [...calendarData, ...calendarCells];
        }

        return [...calendarData, calendarCell];
      },
      [],
    );

  return calendarData;
}

export default useAttendance;
