import React from 'react';
import { ReleaseNotes } from '../../../../../types';

export type ReleaseNotesCardProps = {
  releaseNotes: ReleaseNotes;
};

export const ReleaseNotesCard = ({ releaseNotes }: ReleaseNotesCardProps) => (
  <div>{releaseNotes.versionNumber}</div>
);
