import { Module, forwardRef, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { App } from './App.entity';
import { ReleaseNotesModule } from '../release-notes';

@Module({
  imports: [
    forwardRef((): DynamicModule => TypeOrmModule.forFeature([App])),
    ReleaseNotesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
