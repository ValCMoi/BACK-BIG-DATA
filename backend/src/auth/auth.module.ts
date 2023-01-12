import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientModule } from '../client/client.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { forwardRef } from '@nestjs/common/utils';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
const dotenv = require('dotenv');
dotenv.config()
@Module({
  imports: [
            forwardRef(() => ClientModule),
            PassportModule, 
            TypeOrmModule.forFeature([Client])
            ],
  providers: [AuthService, LocalStrategy],
  exports:[AuthService]
})
export class AuthModule {}