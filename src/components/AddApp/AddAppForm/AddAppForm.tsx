import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormHeader, FormBody, FormField } from './AddAppForm.styled';
import { publishNewApp, updateNewAppDetails } from '../../../store';
import {
  isNewAppDetailsValidSelector,
  getNewAppDetailsSelector
} from '../../../selectors';

export const AddAppForm = () => {
  const dispatch = useDispatch();

  const isSubmitValid = useSelector(isNewAppDetailsValidSelector);

  const newAppDetails = useSelector(getNewAppDetailsSelector);

  const handleAppNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateNewAppDetails({ ...newAppDetails, name: e.target.value }));
    },
    [dispatch, newAppDetails]
  );

  const handleAppAuthorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        updateNewAppDetails({ ...newAppDetails, author: e.target.value })
      );
    },
    [dispatch, newAppDetails]
  );

  const handleSubmit = useCallback(() => {
    dispatch(publishNewApp());
  }, [dispatch]);

  return (
    <Form>
      <FormHeader>ADD APP</FormHeader>
      <FormBody>
        <FormField>
          <TextField
            required
            label="App Name"
            variant="outlined"
            size="small"
            value={newAppDetails.name}
            onChange={handleAppNameChange}
          />
        </FormField>
        <FormField>
          <TextField
            required
            label="App Author"
            variant="outlined"
            size="small"
            value={newAppDetails.author}
            onChange={handleAppAuthorChange}
          />
        </FormField>
      </FormBody>
      <div>
        <Button
          variant="contained"
          color="primary"
          disabled={!isSubmitValid}
          onClick={handleSubmit}
        >
          SUBMIT APP
        </Button>
      </div>
    </Form>
  );
};
