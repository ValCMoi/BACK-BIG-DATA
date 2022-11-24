import { PartialType } from '@nestjs/swagger';
import { CreateUniverDto } from './create-univer.dto';

export class UpdateUniverDto extends PartialType(CreateUniverDto) {}
