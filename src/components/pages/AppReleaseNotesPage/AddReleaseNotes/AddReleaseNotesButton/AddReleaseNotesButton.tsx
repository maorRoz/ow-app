import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { toggleReleaseNotesAddMode } from '../../../../../store';

export const AddReleaseNotesButton = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(toggleReleaseNotesAddMode());
  }, [dispatch]);
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      endIcon={<AddIcon />}
    >
      ADD RELEASE NOTES
    </Button>
  );
};
