import React from 'react';
import { useSelector } from 'react-redux';
import { AddReleaseNotesButton } from './AddReleaseNotesButton';
import { AddReleaseNotesForm } from './AddReleaseNotesForm';
import { AddReleaseNotesLayout } from './AddReleaseNotes.styled';
import { isAddModeSelector } from '../../../../selectors';

export const AddReleaseNotes = () => {
  const isAddMode = useSelector(isAddModeSelector);
  return (
    <AddReleaseNotesLayout>
      {isAddMode ? <AddReleaseNotesForm /> : <AddReleaseNotesButton />}
    </AddReleaseNotesLayout>
  );
};
