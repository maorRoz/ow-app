import { IsOptional, IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ReleaseNotes } from '../../../entities';

export class ReleaseNotesUpdateDto {
  @IsString()
  @ApiProperty({
    required: true,
    example: 'My great release notes!'
  })
  notes: ReleaseNotes['notes'];

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    example: true
  })
  published: ReleaseNotes['published'];
}
