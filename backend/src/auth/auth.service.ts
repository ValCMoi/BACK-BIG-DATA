import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';

const crypt = require('../../utils/crypt/cryptDecrypt.js')

@Injectable()
export class AuthService {
  constructor(private clientService: ClientService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const client = await this.clientService.findOneEmail(email);
    if (client && client.password === crypt.encrypt(password)) {
      const { password, ...result } = client;
      return result;
    }
    return null;
  }
}