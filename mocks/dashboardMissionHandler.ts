import { rest } from 'msw';
import Config from '../config/config.export';
import { Missions } from './data/Missions';
import { API_URL_DASHBOARD } from '../pages/api/dashboard';

const missions = Missions();

export const dashboardMissionHandler = [
  rest.get(
    `${Config().baseUrl}${API_URL_DASHBOARD.MISSION}`,
    async (req, res, ctx) => {
      return res(ctx.json(missions.getMissions()));
    },
  ),
  rest.post(
    `${Config().baseUrl}${API_URL_DASHBOARD.MISSION}`,
    async (req, res, ctx) => {
      missions.submitMission(9);
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
