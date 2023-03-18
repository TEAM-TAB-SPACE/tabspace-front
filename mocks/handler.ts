import { rest } from 'msw';
import Config from '../config/config.export';
import { lectureroomsData } from './data/lectureroomsData';
import { todayLecturesData } from './data/todayLecturesData';

export const handlers = [
  rest.get(`${Config().baseUrl}/lecturerooms`, async (req, res, ctx) => {
    return res(ctx.json(lectureroomsData));
  }),
  rest.get(
    `${Config().baseUrl}/dashboards/todaylectures`,
    async (req, res, ctx) => {
      return res(ctx.json(todayLecturesData));
    },
  ),
  rest.get(`${Config().baseUrl}/dashboards/latest`, async (req, res, ctx) => {
    return res(
      ctx.json({
        title: '올바른 태그 사용',
        videoId: 'I_0kJ6xvBYA',
      }),
    );
  }),
];
