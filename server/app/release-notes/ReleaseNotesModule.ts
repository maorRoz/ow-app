import { Module, forwardRef, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReleaseNotesController } from './ReleaseNotesController';
import { ReleaseNotesService } from './ReleaseNotesService';
import { App, ReleaseNotes } from '../../entities';

@Module({
  imports: [
    forwardRef(
      (): DynamicModule => TypeOrmModule.forFeature([App, ReleaseNotes])
    )
  ],
  controllers: [ReleaseNotesController],
  providers: [ReleaseNotesService]
})
export class ReleaseNotesModule {}
