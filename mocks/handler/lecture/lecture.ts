import { rest } from 'msw';
import Config from '../../../config/config.export';
import { lectureroomsData } from '../../data/lectureroomsData';
import { commentHandler } from './comment';
import { API_URL_LECTURE } from '../../../pages/api/lecture';

export const lectureHandler = [
  rest.get(
    `${Config().baseUrl}${API_URL_LECTURE.LECTUREROOMS}`,
    async (req, res, ctx) => {
      return res(ctx.json(lectureroomsData));
    },
  ),
  ...commentHandler,
];
