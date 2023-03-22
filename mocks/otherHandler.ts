import { rest } from 'msw';
import Config from '../config/config.export';
import { API_URL_OTHER } from '../pages/api/other';
import { calendarData } from './data/calendarData';

export const otherHandler = [
  rest.get(
    `${Config().baseUrl}${API_URL_OTHER.WEEKDAYS}`,
    async (req, res, ctx) => {
      return res(ctx.json(calendarData));
    },
  ),
];
