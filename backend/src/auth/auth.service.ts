import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';

const crypt = require('../../utils/crypt/cryptDecrypt.js')

@Injectable()
export class AuthService {
  constructor(private clientService: ClientService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const client = await this.clientService.findOne(username);
    if (client && client.password === crypt.encrypt(pass)) {
      const { password, ...result } = client;
      return result;
    }
    return null;
  }
}