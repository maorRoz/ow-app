import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { ReleaseNotes } from '../../../../../types';
import {
  Card,
  CardHeader,
  VersionNumber,
  PublishedTag,
  NotPublishedTag,
  CardBody
} from './ReleaseNotesCard.styled';
import { NotesBody } from '../../NotesBody';
import { submitReleaseNotesChanges } from '../../../../../store';

export type ReleaseNotesCardProps = {
  releaseNotes: ReleaseNotes;
};

export const ReleaseNotesCard = ({ releaseNotes }: ReleaseNotesCardProps) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const { versionNumber, notes, published } = releaseNotes;

  const [editableNotes, setEditableNotes] = useState(notes);
  const [editablePublishStatus, setEditablePublishStatus] = useState(published);

  useEffect(() => {
    setEditableNotes(notes);
  }, [notes]);

  useEffect(() => {
    setEditablePublishStatus(published);
  }, [published]);

  const handleNotesChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setEditableNotes(e.target.value);
    },
    [setEditableNotes]
  );

  const handlePublishStatusChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setEditablePublishStatus(checked);
    },
    [setEditablePublishStatus]
  );

  const handleEnableEdit = useCallback(() => {
    !editMode && setEditMode(true);
  }, [editMode]);

  const handleDisableEdit = useCallback(() => {
    setEditMode(false);
  }, []);

  const handlePublish = useCallback(() => {
    dispatch(
      submitReleaseNotesChanges({
        versionNumber,
        notes: editableNotes,
        published: editablePublishStatus
      })
    );
    setEditMode(false);
  }, [dispatch, versionNumber, editableNotes, editablePublishStatus]);

  return (
    <Card>
      <CardHeader>
        <VersionNumber>{releaseNotes.versionNumber}</VersionNumber>
        {published ? (
          <PublishedTag>PUBLISHED</PublishedTag>
        ) : (
          <NotPublishedTag>NOT PUBLISHED</NotPublishedTag>
        )}
      </CardHeader>
      {editMode ? (
        <div>
          <NotesBody value={editableNotes} onChange={handleNotesChange} />
          <div>
            <Checkbox
              checked={editablePublishStatus}
              color="primary"
              onChange={handlePublishStatusChange}
            />
            published
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePublish}
            style={{ marginRight: '5px' }}
          >
            PUBLISH
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDisableEdit}
          >
            CANCEL EDIT
          </Button>
        </div>
      ) : (
        <CardBody onClick={handleEnableEdit}>{releaseNotes.notes}</CardBody>
      )}
    </Card>
  );
};
