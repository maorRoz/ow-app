import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  FormHeader,
  FormBody,
  FormField
} from './AddReleaseNotesForm.styled';
import { publishNewApp, updateNewAppDetails } from '../../../../../store';
import {
  isNewAppDetailsValidSelector,
  getNewAppDetailsSelector
} from '../../../../../selectors';
import { NotesBody } from '../../NotsBody';

export const AddReleaseNotesForm = () => {
  const dispatch = useDispatch();

  const isSubmitValid = useSelector(isNewAppDetailsValidSelector);

  const newAppDetails = useSelector(getNewAppDetailsSelector);

  const handleAppNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateNewAppDetails({ ...newAppDetails, name: e.target.value }));
    },
    [dispatch, newAppDetails]
  );

  const handleSubmit = useCallback(() => {
    dispatch(publishNewApp());
  }, [dispatch]);

  return (
    <Form>
      <FormHeader>ADD RELEASE NOTES</FormHeader>
      <FormBody>
        <FormField>
          <TextField
            required
            label="Version Number"
            variant="outlined"
            size="small"
            value={newAppDetails.name}
            onChange={handleAppNameChange}
            style={{ width: '100%' }}
          />
        </FormField>
        <FormField>
          <NotesBody />
        </FormField>
        <FormField>
          <Checkbox defaultChecked color="primary" />
          published
        </FormField>
      </FormBody>
      <div>
        <Button
          variant="contained"
          color="primary"
          disabled={!isSubmitValid}
          onClick={handleSubmit}
        >
          SUBMIT RELEASE NOTES
        </Button>
      </div>
    </Form>
  );
};
