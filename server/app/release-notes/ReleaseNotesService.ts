import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReleaseNotes } from '../../entities/ReleaseNotes.entity';
import { App } from '../../entities/App.entity';

const NUM_OF_RELEASE_NOTES_PER_PAGE = 5;

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
    await this.releaseNotesRepository.insert({ ...releaseNotes, app });
    return releaseNotes;
  }

  async updateReleaseNotes({
    appId,
    versionNumber,
    notes,
    published
  }: {
    appId: App['id'];
  } & Pick<ReleaseNotes, 'versionNumber' | 'notes' | 'published'>): Promise<
    ReleaseNotes
  > {
    const app = await this.appRepository.findOneOrFail(appId);
    await this.releaseNotesRepository.update(
      { app, versionNumber },
      { notes, published }
    );

    return this.releaseNotesRepository.findOne({ app, versionNumber });
  }

  async findAllReleaseNotes(appId: App['id']): Promise<ReleaseNotes[]> {
    return this.releaseNotesRepository.find({
      where: { app: appId }
    });
  }

  async findAllPublishedReleaseNotes({
    appId,
    versionNumber,
    page = 1
  }: {
    appId: App['id'];
    versionNumber: ReleaseNotes['versionNumber'];
    page?: number;
  }): Promise<{
    itemsPerPage: number;
    content: Pick<ReleaseNotes, 'versionNumber' | 'releaseDate' | 'notes'>[];
  }> {
    const publishedReleaseNotesArray = await this.releaseNotesRepository.find({
      where: { app: appId, published: true }
    });

    const oldPublishedReleaseNotesArray = publishedReleaseNotesArray.filter(
      releaseNotes => releaseNotes.versionNumber !== versionNumber
    );

    const requestedReleaseNotes = publishedReleaseNotesArray.find(
      releaseNotes => releaseNotes.versionNumber === versionNumber
    );

    const sortedReleaseNotesArray = requestedReleaseNotes
      ? [requestedReleaseNotes].concat(oldPublishedReleaseNotesArray)
      : oldPublishedReleaseNotesArray;

    const fixedPage = page && page > 0 ? page : 1;

    const paginatedReleaseNotesArray = sortedReleaseNotesArray.slice(
      (fixedPage - 1) * NUM_OF_RELEASE_NOTES_PER_PAGE,
      fixedPage * NUM_OF_RELEASE_NOTES_PER_PAGE
    );

    const fixedPaginatedReleaseNotesArray = paginatedReleaseNotesArray.map(
      releaseNotes => ({
        versionNumber: releaseNotes.versionNumber,
        releaseDate: releaseNotes.releaseDate,
        notes: releaseNotes.notes
      })
    );

    return {
      itemsPerPage: NUM_OF_RELEASE_NOTES_PER_PAGE,
      content: fixedPaginatedReleaseNotesArray
    };
  }
}
