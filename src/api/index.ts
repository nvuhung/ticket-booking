import { seats } from '../test/mocks';
import { ISeatResult } from '../models/api';

export const fetchSeatsApi = async (): Promise<ISeatResult> => {
  return Promise.resolve(seats);
};
