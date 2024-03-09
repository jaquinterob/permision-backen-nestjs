import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration/configuration';
import { PermisionsModule } from './modules/permisions/permisions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('mongo.user')}:${configService.get('mongo.password')}@${configService.get('mongo.host')}:${configService.get('mongo.port')}/${configService.get('mongo.database')}?authSource=admin`,
      }),
    }),
    PermisionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
