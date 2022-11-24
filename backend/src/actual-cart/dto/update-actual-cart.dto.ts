import { PartialType } from '@nestjs/swagger';
import { CreateActualCartDto } from './create-actual-cart.dto';

export class UpdateActualCartDto extends PartialType(CreateActualCartDto) {}
