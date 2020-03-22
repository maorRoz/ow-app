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
import {
  publishNewReleaseNotes,
  updateNewReleaseNotesDetails
} from '../../../../../store';
import {
  isNewReleaseNotesDetailsValidSelector,
  getNewReleaseNotesDetailsSelector,
  isSubmitFailedSelector
} from '../../../../../selectors';
import { NotesBody } from '../../NotsBody';

export const AddReleaseNotesForm = () => {
  const dispatch = useDispatch();

  const isSubmitValid = useSelector(isNewReleaseNotesDetailsValidSelector);

  const newReleaseNotesDetails = useSelector(getNewReleaseNotesDetailsSelector);

  const isSubmitFailed = useSelector(isSubmitFailedSelector);

  const handleVersionNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        updateNewReleaseNotesDetails({
          ...newReleaseNotesDetails,
          versionNumber: e.target.value
        })
      );
    },
    [dispatch, newReleaseNotesDetails]
  );

  const handleNotesChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(
        updateNewReleaseNotesDetails({
          ...newReleaseNotesDetails,
          notes: e.target.value
        })
      );
    },
    [dispatch, newReleaseNotesDetails]
  );

  const handlePublishStatusChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      dispatch(
        updateNewReleaseNotesDetails({
          ...newReleaseNotesDetails,
          published: checked
        })
      );
    },
    [dispatch, newReleaseNotesDetails]
  );

  const handleSubmit = useCallback(() => {
    dispatch(publishNewReleaseNotes());
  }, [dispatch]);

  return (
    <Form>
      <FormHeader>ADD RELEASE NOTES</FormHeader>
      <FormBody>
        <FormField>
          <TextField
            required
            label="Version Number"
            placeholder="xxx.yyy.zzz"
            error={isSubmitFailed}
            helperText={
              isSubmitFailed &&
              'Please enter valid version number format - xxx.yyy.zzz'
            }
            variant="outlined"
            size="small"
            value={newReleaseNotesDetails.versionNumber}
            onChange={handleVersionNumberChange}
            style={{ width: '100%' }}
          />
        </FormField>
        <FormField>
          <NotesBody
            placeholder="Enter version release notes description..."
            value={newReleaseNotesDetails.notes}
            onChange={handleNotesChange}
          />
        </FormField>
        <FormField>
          <Checkbox
            color="primary"
            checked={newReleaseNotesDetails.published}
            onChange={handlePublishStatusChange}
          />
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
