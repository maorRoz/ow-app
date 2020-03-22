import React, { useState, useCallback } from 'react';
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
import { NotesBody } from '../../NotsBody';

export type ReleaseNotesCardProps = {
  releaseNotes: ReleaseNotes;
};

export const ReleaseNotesCard = ({ releaseNotes }: ReleaseNotesCardProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEnableEdit = useCallback(() => {
    !isEdit && setIsEdit(true);
  }, [isEdit]);

  const handleDisableEdit = useCallback(() => {
    setIsEdit(false);
  }, []);

  return (
    <Card onClick={handleEnableEdit}>
      <CardHeader>
        <VersionNumber>{releaseNotes.versionNumber}</VersionNumber>
        {releaseNotes.published ? (
          <PublishedTag>PUBLISHED</PublishedTag>
        ) : (
          <NotPublishedTag>NOT PUBLISHED</NotPublishedTag>
        )}
      </CardHeader>
      {isEdit ? (
        <div>
          <NotesBody defaultValue={releaseNotes.notes} />
          <div>
            <Checkbox defaultChecked color="primary" />
            published
          </div>
          <Button
            variant="contained"
            color="primary"
            //onClick={() => {}}
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
        <CardBody>{releaseNotes.notes}</CardBody>
      )}
    </Card>
  );
};
