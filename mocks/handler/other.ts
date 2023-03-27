import { rest } from 'msw';
import Config from '../../config/config.export';
import { calendarData } from '../data/calendarData';
import { API_URL_OTHER } from '../../pages/api/other';

export const otherHandler = [
  rest.get(
    `${Config().baseUrl}${API_URL_OTHER.WEEKDAYS}`,
    async (req, res, ctx) => {
      return res(ctx.json(calendarData));
    },
  ),
  rest.get(
    `${Config().baseUrl}${API_URL_OTHER.USERNAME}`,
    async (req, res, ctx) => {
      return res(
        ctx.json({
          id: 9,
          realname: '박찬양',
        }),
      );
    },
  ),
  rest.post(
    `${Config().baseUrl}${API_URL_OTHER.APPLIERS}`,
    async (req, res, ctx) => {
      return res(ctx.status(400));
    },
  ),
];
