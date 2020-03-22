import axios, { AxiosResponse } from 'axios';
import { App } from '../../../types';

export const GetAppApi = (appId: App['id']): Promise<AxiosResponse<App>> =>
  axios.get(`/api/app/${appId}`);
