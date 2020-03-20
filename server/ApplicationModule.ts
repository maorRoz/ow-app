import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { App, AppModule } from './app';
import { ReleaseNotes } from './release-notes';

@Module({
  imports: [TypeOrmModule.forRoot({ entities: [App, ReleaseNotes] }), AppModule]
})
export class ApplicationModule {}
