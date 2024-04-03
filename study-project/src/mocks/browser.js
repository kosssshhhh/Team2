import { setupWorker } from 'msw/browser';
import membersHandler from './membersHandler';

export const worker = setupWorker(...membersHandler);
