import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { App, ReleaseNotes } from './entities';
import { AppModule } from './app';

@Module({
  imports: [TypeOrmModule.forRoot({ entities: [App, ReleaseNotes] }), AppModule]
})
export class ApplicationModule {}
