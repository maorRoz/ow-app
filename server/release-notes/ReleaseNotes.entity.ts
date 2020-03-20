import { Entity, ObjectType, ManyToOne, PrimaryColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsBoolean } from 'class-validator';
import { App } from '../app';

@Entity()
export class ReleaseNotes {
  @ManyToOne(
    (): ObjectType<App> => App,
    app => app.releaseNotes,
    { primary: true }
  )
  app: App;

  @PrimaryColumn()
  @IsString() // change to regex expression
  @ApiProperty({
    required: true,
    example: '1.0.0'
  })
  versionNumber: string;

  @Column('text')
  //@IsDateString()
  @ApiProperty({
    required: true,
    example: '27-5-2020'
  })
  releaseDate: string;

  @Column('text')
  @IsString()
  @ApiProperty({
    required: true,
    example: 'My great release notes!'
  })
  releaseNotes: string;

  @Column('boolean')
  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    example: true
  })
  published?: boolean;
}
