import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TestUserEntity } from './resources/users/entities/testUser.entity';
import { CompaniesModule } from './resources/companies/companies.module';
import { CompanyEntity } from './resources/companies/entities/company.entity';
import { UsersModule } from './resources/users/users.module';
import { JobsModule } from './resources/jobs/jobs.module';
import { JobEntity } from './resources/jobs/entities/job.entity';
import { ApplicationEntity } from './resources/applications/entities/application.entity';
import { ApplicationsModule } from './resources/applications/applications.module';

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
        entities: [TestUserEntity, CompanyEntity, JobEntity, ApplicationEntity],
        database: configService.get<string>('PGDATABASE'),
        synchronize: configService.get<boolean>('synchronize'),
        logging: configService.get<boolean>('logging'),
        ssl: configService.get<boolean>('ssl'),
      }),
    }),
    ApplicationsModule,
    UsersModule,
    JobsModule,
    CompaniesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
