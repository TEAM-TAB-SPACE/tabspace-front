import { rest } from 'msw';
import Config from '../config/config.export';
import { dashboardMissionHandler } from './dashboardMissionHandler';
import { lectureroomsData } from './data/lectureroomsData';
import { todayLecturesData } from './data/todayLecturesData';
import { API_URL_LECTURE } from '../pages/api/lecture';
import { API_URL_DASHBOARD } from '../pages/api/dashboard';

export const handlers = [
  rest.get(
    `${Config().baseUrl}${API_URL_LECTURE.ALL_LECTURE}`,
    async (req, res, ctx) => {
      return res(ctx.json(lectureroomsData));
    },
  ),
  rest.get(
    `${Config().baseUrl}${API_URL_DASHBOARD.ATTENDANCE}`,
    async (req, res, ctx) => {
      return res(
        ctx.json({
          start_date: '2023-03-01',
          attendance: 'h0000000111',
        }),
      );
    },
  ),
  rest.get(
    `${Config().baseUrl}${API_URL_DASHBOARD.TODAY}`,
    async (req, res, ctx) => {
      return res(ctx.json(todayLecturesData));
    },
  ),
  rest.get(
    `${Config().baseUrl}${API_URL_DASHBOARD.LATEST}`,
    async (req, res, ctx) => {
      return res(
        ctx.json({
          title: '올바른 태그 사용',
          videoId: 'I_0kJ6xvBYA',
        }),
      );
    },
  ),
  ...dashboardMissionHandler,
];
