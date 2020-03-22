import axios, { AxiosResponse } from 'axios';
import { App } from '../../../types';

export const CreateAppApi = (
  newAppDetails: Pick<App, 'name' | 'author'>
): Promise<AxiosResponse<App>> => axios.post('/api/app', newAppDetails);
