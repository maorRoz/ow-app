import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { App } from './app';
import { ReleaseNotes } from './release-notes';

@Module({
  imports: [TypeOrmModule.forRoot({ entities: [App, ReleaseNotes] })]
})
export class ApplicationModule {}
