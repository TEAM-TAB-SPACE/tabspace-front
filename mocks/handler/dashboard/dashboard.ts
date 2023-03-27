import { rest } from 'msw';
import Config from '../../../config/config.export';
import { missionHandler } from './mission';
import { todayLecturesData } from '../../data/todayLecturesData';
import { growthData } from '../../data/growthData';
import { API_URL_DASHBOARD } from '../../../pages/api/dashboard';

export const dashboardHandler = [
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
    `${Config().baseUrl}${API_URL_DASHBOARD.TODAY}`,
    async (req, res, ctx) => {
      return res(ctx.json(todayLecturesData));
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
    `${Config().baseUrl}${API_URL_DASHBOARD.GROWTH}`,
    async (req, res, ctx) => {
      return res(ctx.json(growthData));
    },
  ),
  rest.get(
    `${Config().baseUrl}${API_URL_DASHBOARD.NOTIFICATION}`,
    async (req, res, ctx) => {
      return res(
        ctx.json({
          notifications:
            '오늘은 밀린 강의를 청소해 볼까요 ? 마음이 한결 가벼워질거에요 (4),탭탭이랑 1일 1과제 어때요 ?  (5)',
        }),
      );
    },
  ),
  ...missionHandler,
];
