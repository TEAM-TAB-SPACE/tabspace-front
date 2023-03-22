import { rest } from 'msw';
import Config from '../config/config.export';
import { commentHandler } from './commentHandler';
import { dashboardMissionHandler } from './dashboardMissionHandler';
import { otherHandler } from './otherHandler';
import { growthData } from './data/growthData';
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
          attendance: 'h11111111111001',
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
  rest.get(
    `${Config().baseUrl}${API_URL_DASHBOARD.GROWTH}`,
    async (req, res, ctx) => {
      return res(ctx.json(growthData));
    },
  ),
  ...dashboardMissionHandler,
  ...commentHandler,
  ...otherHandler,
];
