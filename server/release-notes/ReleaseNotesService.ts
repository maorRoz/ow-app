import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReleaseNotes } from './ReleaseNotes.entity';
import { App } from '../app';

@Injectable()
export class ReleaseNotesService {
  constructor(
    @InjectRepository(ReleaseNotes)
    private readonly releaseNotesRepository: Repository<ReleaseNotes>,
    @InjectRepository(App)
    private readonly appRepository: Repository<App>
  ) {}

  async insertReleaseNotes({
    appId,
    releaseNotes
  }: {
    appId: App['id'];
    releaseNotes: ReleaseNotes;
  }): Promise<ReleaseNotes> {
    const app = await this.appRepository.findOneOrFail(appId);
    await this.releaseNotesRepository.insert({ app, ...releaseNotes });
    return releaseNotes;
  }
}
