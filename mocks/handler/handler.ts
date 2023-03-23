import { otherHandler } from './other';
import { lectureHandler } from './lecture/lecture';
import { dashboardHandler } from './dashboard.ts/dashboard';

export const handlers = [
  ...lectureHandler,
  ...dashboardHandler,
  ...otherHandler,
];
