import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { Client } from 'src/client/entities/client.entity';
const crypt = require('../../utils/crypt/cryptDecrypt.js')

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientService,
    ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.clientService.findOneEmail(email);
    if (user && user.password === crypt.encrypt(password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Client) {
    const payload = { email: user.email, sub: user.id};
    return {
      user: payload.sub,
    };
  }

}