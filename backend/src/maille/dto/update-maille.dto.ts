import { PartialType } from '@nestjs/swagger';
import { CreateMailleDto } from './create-maille.dto';

export class UpdateMailleDto extends PartialType(CreateMailleDto) {}
