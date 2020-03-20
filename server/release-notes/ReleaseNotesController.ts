import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiParam
} from '@nestjs/swagger';
import { ReleaseNotesService } from './ReleaseNotesService';
import { ReleaseNotes } from './ReleaseNotes.entity';
import { App } from '../app';

@Controller('app/:id/releaseNotes')
@ApiTags('app')
export class ReleaseNotesController {
  constructor(private readonly releaseNotesService: ReleaseNotesService) {}

  @Post()
  @ApiParam({ name: 'appId', schema: { type: 'string', format: 'uuid' } })
  @ApiCreatedResponse({
    description: 'Successfully created app',
    type: ReleaseNotes
  })
  createApp(
    @Param('appId') appId: App['id'],
    @Body() releaseNotes: ReleaseNotes
  ): Promise<ReleaseNotes> {
    return this.releaseNotesService.insertReleaseNotes({ appId, releaseNotes });
  }
}
