import axios, { AxiosResponse } from 'axios';
import { App } from '../../../types';

export const GetAppsApi = (): Promise<AxiosResponse<App[]>> =>
  axios.get('/app');
