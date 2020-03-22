import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { toggleAddMode } from '../../../../../store';

export const AddAppButton = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(toggleAddMode());
  }, [dispatch]);
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      endIcon={<AddIcon />}
    >
      ADD APP
    </Button>
  );
};
