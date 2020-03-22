import axios, { AxiosResponse } from 'axios';
import { App, ReleaseNotes } from '../../../types';

export const CreateReleaseNotesApi = (
  appId: App['id'],
  releaseNotes: ReleaseNotes
): Promise<AxiosResponse<App>> =>
  axios.post(`/api/app/${appId}/releaseNotes`, releaseNotes);
