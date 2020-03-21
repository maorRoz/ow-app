import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApps } from '../../../store';
import { AppListGrid } from '../../AppListGrid';
import { AddApp } from '../../AddApp';

export const AppListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApps());
  }, [dispatch]);

  return (
    <>
      <AppListGrid />
      <AddApp />
    </>
  );
};
