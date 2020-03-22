import axios, { AxiosResponse } from 'axios';
import { App, ReleaseNotes } from '../../../types';

export const CreateReleaseNotesApi = (
  appId: App['id'],
  releaseNotes: Omit<ReleaseNotes, 'releaseDate'> & { releaseDate: Date }
): Promise<AxiosResponse<App>> =>
  axios.post(`/api/app/${appId}/releaseNotes`, releaseNotes);
