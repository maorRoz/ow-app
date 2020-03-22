import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  HttpCode,
  Query
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiParam,
  ApiQuery,
  ApiOperation
} from '@nestjs/swagger';
import { ReleaseNotesService } from './ReleaseNotesService';
import { ReleaseNotes } from '../../entities/ReleaseNotes.entity';
import { App } from '../../entities';
import { ReleaseNotesUpdateDto } from './dto/ReleaseNotesUpdateDto';

@Controller('app/:id/releaseNotes')
@ApiTags('app')
export class ReleaseNotesController {
  constructor(private readonly releaseNotesService: ReleaseNotesService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all ReleaseNotes of the App' })
  @ApiParam({ name: 'id', schema: { type: 'string', format: 'uuid' } })
  getAllReleaseNotes(@Param('id') appId: App['id']): Promise<ReleaseNotes[]> {
    return this.releaseNotesService.findAllReleaseNotes(appId);
  }

  @Post()
  @ApiOperation({ summary: 'Create ReleaseNotes for the App' })
  @ApiParam({ name: 'appId', schema: { type: 'string', format: 'uuid' } })
  @ApiCreatedResponse({
    description: 'Successfully created ReleaseNotes',
    type: ReleaseNotes
  })
  createReleaseNotes(
    @Param('appId') appId: App['id'],
    @Body() releaseNotes: ReleaseNotes
  ): Promise<ReleaseNotes> {
    return this.releaseNotesService.insertReleaseNotes({ appId, releaseNotes });
  }

  @HttpCode(200)
  @Post(':versionNumber')
  @ApiOperation({ summary: 'Get all published ReleaseNotes of the App' })
  @ApiParam({ name: 'appId', schema: { type: 'string', format: 'uuid' } })
  @ApiParam({ name: 'versionNumber', type: 'string' })
  @ApiQuery({ name: 'page', type: 'number', required: false })
  @ApiOkResponse({
    description: 'Successfully fetched published release notes',
    type: [App]
  })
  getPublishedReleaseNotes(
    @Param('appId') appId: App['id'],
    @Param('versionNumber') versionNumber: ReleaseNotes['versionNumber'],
    @Query('page') page = 1
  ): Promise<{
    itemsPerPage: number;
    content: Pick<ReleaseNotes, 'versionNumber' | 'releaseDate' | 'notes'>[];
  }> {
    return this.releaseNotesService.findAllPublishedReleaseNotes({
      appId,
      versionNumber,
      page
    });
  }

  @Patch(':versionNumber')
  @ApiOperation({ summary: 'Update ReleaseNotes' })
  @ApiParam({ name: 'appId', schema: { type: 'string', format: 'uuid' } })
  @ApiParam({ name: 'versionNumber', type: 'string' })
  @ApiOkResponse({
    description: 'Successfully updated ReleaseNotes',
    type: ReleaseNotes
  })
  updateReleaseNotes(
    @Param('appId') appId: App['id'],
    @Param('versionNumber') versionNumber: ReleaseNotes['versionNumber'],
    @Body()
    releaseNotesUpdateParams: ReleaseNotesUpdateDto
  ): Promise<ReleaseNotes> {
    return this.releaseNotesService.updateReleaseNotes({
      appId,
      versionNumber,
      ...releaseNotesUpdateParams
    });
  }
}
