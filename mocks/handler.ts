import { rest } from 'msw';
import Config from '../config/config.export';
import { lectureroomsData } from './data/lectureroomsData';

export const handlers = [
  rest.get(`${Config().baseUrl}/lecturerooms`, async (req, res, ctx) => {
    return res(ctx.json(lectureroomsData));
  }),
];
