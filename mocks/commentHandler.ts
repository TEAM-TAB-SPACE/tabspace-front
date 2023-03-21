import { rest } from 'msw';
import Config from '../config/config.export';
import { Comments } from './data/Comments';
import { API_URL_LECTURE } from '../pages/api/lecture';

const comments = Comments();

export const lectureCommentHandler = [
  rest.get(
    `${Config().baseUrl}${API_URL_LECTURE.COMMENTS_READ}`,
    async (req, res, ctx) => {
      return res(ctx.json(comments.getComments()));
    },
  ),
];
