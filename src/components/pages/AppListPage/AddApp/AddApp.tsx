import React from 'react';
import { useSelector } from 'react-redux';
import { AddAppButton } from './AddAppButton';
import { AddAppForm } from './AddAppForm';
import { AddAppLayout } from './AddApp.styled';
import { isAddModeSelector } from '../../../../selectors';

export const AddApp = () => {
  const isAddMode = useSelector(isAddModeSelector);
  return (
    <AddAppLayout>{isAddMode ? <AddAppForm /> : <AddAppButton />}</AddAppLayout>
  );
};
