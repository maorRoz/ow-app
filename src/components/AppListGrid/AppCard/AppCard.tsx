import React from 'react';
import { App } from '../../../types';
import { Card, AppName, AppAuthor } from './AppCard.styled';

export type AppCardProps = {
  app: App;
};

export const AppCard = ({ app }: AppCardProps) => (
  <Card>
    <AppName>{app.name}</AppName>
    <AppAuthor>{app.author}</AppAuthor>
  </Card>
);
