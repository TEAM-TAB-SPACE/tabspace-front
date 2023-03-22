import { rest } from 'msw';
import Config from '../../../config/config.export';
import { Comments } from '../../data/Comments';
import { API_URL_LECTURE } from '../../../pages/api/lecture';

const comments = Comments();

export const commentHandler = [
  rest.get(
    `${Config().baseUrl}${API_URL_LECTURE.COMMENTS_READ}`,
    async (req, res, ctx) => {
      return res(ctx.json(comments.getComments()));
    },
  ),
  rest.post(
    `${Config().baseUrl}${API_URL_LECTURE.COMMENTS_OTHER}`,
    async (req, res, ctx) => {
      const { comment } = await req.json();
      comments.addComment(comment);

      return res(
        ctx.json({
          id: 3,
          created_at: '2023-03-19T14:22:36.524150+09:00',
          updated_at: '2023-03-19T14:22:36.524150+09:00',
          comment: '질문있습니다!',
          user: 9,
          lecture: 1,
        }),
      );
    },
  ),
  rest.delete(
    `${Config().baseUrl}${API_URL_LECTURE.COMMENTS_OTHER}`,
    async (req, res, ctx) => {
      const { id } = await req.json();
      comments.deleteComment(id);

      return res(ctx.status(200));
    },
  ),
];
