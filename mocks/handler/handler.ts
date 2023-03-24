import { otherHandler } from './other';
import { lectureHandler } from './lecture/lecture';
import { dashboardHandler } from './dashboard/dashboard';
import { authHandler } from './auth';

export const handlers = [
  ...lectureHandler,
  ...dashboardHandler,
  ...otherHandler,
  ...authHandler,
];
