import React from 'react';
import { useSelector } from 'react-redux';
import { ReleaseNotesCard } from './ReleaseNotesCard/ReleaseNotesCard';
import {
  getReleaseNotesSelector,
  getSelectedAppNameSelector
} from '../../../../selectors';
import { AppNameHeader } from './ReleaseNotesList.styled';

export const ReleaseNotesList = () => {
  const releaseNotesArray = useSelector(getReleaseNotesSelector);

  const appName = useSelector(getSelectedAppNameSelector);

  return (
    <div>
      <AppNameHeader>{appName}</AppNameHeader>
      {releaseNotesArray.map((releaseNotes, index) => (
        <ReleaseNotesCard key={index} releaseNotes={releaseNotes} />
      ))}
    </div>
  );
};
