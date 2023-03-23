import { setupServer } from 'msw/node';
import { handlers } from './handler/handler';

export const server = setupServer(...handlers);
