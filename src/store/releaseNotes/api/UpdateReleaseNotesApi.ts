import axios, { AxiosResponse } from 'axios';
import { App, ReleaseNotes } from '../../../types';

export const UpdateReleaseNotesApi = ({
  appId,
  versionNumber,
  notes,
  published
}: Pick<ReleaseNotes, 'versionNumber' | 'notes' | 'published'> & {
  appId: App['id'];
}): Promise<AxiosResponse<App>> =>
  axios.patch(`/api/app/${appId}/releaseNotes/${versionNumber}`, {
    notes,
    published
  });
