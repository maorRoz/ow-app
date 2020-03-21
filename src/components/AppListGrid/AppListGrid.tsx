import React from 'react';
import { useSelector } from 'react-redux';
import { getAppsSelector } from '../../selectors';
import { AppCard } from './AppCard';
import { Grid } from './AppListGrid.styled';

export const AppListGrid = () => {
  const apps = useSelector(getAppsSelector);

  return (
    <Grid>
      {apps.map((app, index) => (
        <AppCard key={index} app={app} />
      ))}
    </Grid>
  );
};
