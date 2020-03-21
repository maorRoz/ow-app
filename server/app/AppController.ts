import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiParam
} from '@nestjs/swagger';
import { AppService } from './AppService';
import { App } from '../entities/App.entity';

@Controller('app')
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get all the Apps' })
  @ApiOkResponse({
    description: 'Successfully fetched apps',
    type: [App]
  })
  getAllApps(): Promise<App[]> {
    return this.appService.findAllApps();
  }

  @Post()
  @ApiOperation({ summary: 'Create an App' })
  @ApiCreatedResponse({
    description: 'Successfully created app',
    type: App
  })
  createApp(@Body() app: App): Promise<App> {
    return this.appService.insertApp(app);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get App by id' })
  @ApiParam({ name: 'id', schema: { type: 'string', format: 'uuid' } })
  @ApiOkResponse({
    description: 'Successfully fetched app',
    type: App
  })
  getAppById(@Param('id') id: string): Promise<App> {
    return this.appService.findAppById(id);
  }
}
