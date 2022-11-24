import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { RateModule } from './rate/rate.module';
import { FamilleModule } from './famille/famille.module';
import { UniversModule } from './univers/univers.module';

const dotenv = require('dotenv');
dotenv.config()


const configConnectionDB:TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,// Number(process.env.MYSQL_PORT_EXPOSE),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_USER_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true
}
console.log("Configuration connection")
console.table(configConnectionDB)

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot(configConnectionDB),
    ClientModule,
    ProductModule,
    RateModule,
    FamilleModule,
    UniversModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
