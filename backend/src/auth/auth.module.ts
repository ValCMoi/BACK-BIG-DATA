import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [ClientModule],
  providers: [AuthService],
})
export class AuthModule {}
