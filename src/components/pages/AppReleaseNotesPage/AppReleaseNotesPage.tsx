import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { App } from '../../../types';
import { fetchReleaseNotes } from '../../../store';
import { ReleaseNotesList } from './ReleaseNotesList';
import { AddReleaseNotes } from './AddReleaseNotes';

export const AppReleaseNotesPage = () => {
  const dispatch = useDispatch();

  const match: { params: { id: App['id'] } } = useRouteMatch();

  useEffect(() => {
    const appId = match.params.id;
    dispatch(fetchReleaseNotes(appId));
  }, [dispatch, match]);

  return (
    <>
      <ReleaseNotesList />
      <AddReleaseNotes />
    </>
  );
};
