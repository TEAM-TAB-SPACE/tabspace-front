import { CalendarCellData } from '../store/dashboard';

const WEEK_LENGTH = 5;

function useAttendance(attendanceData: { startDate: any; attendance: any }) {
  const { startDate, attendance } = attendanceData;

  let year = startDate?.getYear();
  let month = startDate?.getMonth();
  let date = startDate?.getDate();
  const day = startDate?.getDay();

  const lastDate = new Date(year, month, 0);
  const firstWeekLenght = WEEK_LENGTH - day;

  const nextDate = () => {
    date += 1;
    if (date === lastDate) month += 1;
  };

  const isHoliday = (state: string) => state === 'h';
  const isFriday = (index: number) => index % WEEK_LENGTH === firstWeekLenght;

  const calendarData = attendance
    .split('')
    .reduce(
      (calendarData: number[], attendancePerDay: string, index: number) => {
        const state = isHoliday(attendancePerDay)
          ? false
          : !!Number(attendancePerDay);
        const calendarCell: CalendarCellData = { month, date, state };

        if (isFriday(index)) {
          const weekendCells = [0, 0].map(state => {
            nextDate();
            return { month, date, state };
          });

          nextDate();
          return [...calendarData, calendarCell, ...weekendCells];
        }

        nextDate();
        return [...calendarData, calendarCell];
      },
      [],
    );

  return calendarData;
}

export default useAttendance;
