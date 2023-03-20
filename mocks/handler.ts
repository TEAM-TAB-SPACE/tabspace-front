import { rest } from 'msw';
import Config from '../config/config.export';
import { API_URL_DASHBOARD } from '../pages/api/dashboard';
import { API_URL_LECTURE } from '../pages/api/lecture';
import { lectureroomsData } from './data/lectureroomsData';
import { Missions } from './data/Missions';
import { todayLecturesData } from './data/todayLecturesData';

const missions = Missions();

export const handlers = [
  rest.get(
    `${Config().baseUrl}${API_URL_LECTURE.ALL_LECTURE}`,
    async (req, res, ctx) => {
      return res(ctx.json(lectureroomsData));
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
    `${Config().baseUrl}${API_URL_DASHBOARD.MISSION}`,
    async (req, res, ctx) => {
      return res(ctx.json(missions.getMissions()));
    },
  ),
  rest.post(
    `${Config().baseUrl}${API_URL_DASHBOARD.MISSION}`,
    async (req, res, ctx) => {
      return res(ctx.text('homework submitted successfully'));
    },
  ),
  rest.delete(
    `${Config().baseUrl}${API_URL_DASHBOARD.MISSION}`,
    async (req, res, ctx) => {
      const { id } = await req.json();
      missions.deleteSubmittedFile(id);

      return res(ctx.text('storage deleted'));
    },
  ),
];
