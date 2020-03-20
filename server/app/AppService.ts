import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from './App.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(App) private readonly appRepository: Repository<App>
  ) {}

  findAllApps(): Promise<App[]> {
    return this.appRepository.find();
  }

  async insertApp(app: App): Promise<App> {
    await this.appRepository.insert(app);
    return app;
  }

  findAppById(appId: App['id']): Promise<App> {
    return this.appRepository.findOne(appId);
  }
}
