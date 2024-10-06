import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from './entities/application.entity';
import { S3Service } from '../../services/s3.service';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly applicationRepository: Repository<ApplicationEntity>,
    private readonly s3Service: S3Service,
  ) {}

  public async saveApplication(
    createApplicationDto: CreateApplicationDto,
  ): Promise<boolean> {
    const cvUrl = await this.s3Service.uploadFile(createApplicationDto.cv);
    const applicationToSave = this.applicationRepository.create({
      ...createApplicationDto,
      cvUrl,
    });
    const application =
      await this.applicationRepository.save(applicationToSave);
    return !!application.id;
  }

  findAll() {
    return `This action returns all applications`;
  }

  public async allowedToSubmit(ip: string): Promise<boolean> {
    const record = await this.applicationRepository.findOneBy({ ip });
    return !Boolean(record);
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
