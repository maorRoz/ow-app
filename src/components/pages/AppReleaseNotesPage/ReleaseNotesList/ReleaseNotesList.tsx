import React from 'react';
import { useSelector } from 'react-redux';
import { ReleaseNotesCard } from './ReleaseNotesCard/ReleaseNotesCard';
import { getReleaseNotesSelector } from '../../../../selectors';

export const ReleaseNotesList = () => {
  const releaseNotesArray = useSelector(getReleaseNotesSelector);

  return (
    <div>
      {releaseNotesArray.map((releaseNotes, index) => (
        <ReleaseNotesCard key={index} releaseNotes={releaseNotes} />
      ))}
    </div>
  );
};
