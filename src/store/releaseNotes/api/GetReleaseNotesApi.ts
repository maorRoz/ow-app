import axios, { AxiosResponse } from 'axios';
import { App } from '../../../types';

export const GetReleaseNotesApi = (
  appId: App['id']
): Promise<AxiosResponse<App[]>> => axios.get(`/api/app/${appId}/releaseNotes`);
