import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TestUser } from './entities/testUser.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('PGHOST'),
        port: configService.get<number>('DBPORT'),
        password: configService.get<string>('PGPASSWORD'),
        username: configService.get<string>('PGUSER'),
        entities: [TestUser],
        database: configService.get<string>('PGDATABASE'),
        synchronize: configService.get<boolean>('synchronize'),
        logging: configService.get<boolean>('logging'),
        ssl: configService.get<boolean>('ssl'),
      }),
    }),
    AppModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
