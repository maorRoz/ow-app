import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ObjectType,
  Column
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ReleaseNotes } from '../release-notes';

@Entity()
export class App {
  @ApiProperty({ example: 'd69abc90-a8f3-4116-aeca-838ac72a8bd1' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  @IsString()
  @ApiProperty({
    required: true,
    example: 'World Of Warcraft'
  })
  name: string;

  @Column('text')
  @IsString()
  @ApiProperty({
    required: true,
    example: 'Blizzard'
  })
  author: string;

  @OneToMany(
    (): ObjectType<ReleaseNotes> => ReleaseNotes,
    releaseNotes => releaseNotes.app
  )
  releaseNotes?: ReleaseNotes[];
}
