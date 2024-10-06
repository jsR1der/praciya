import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobEntity } from './entities/job.entity';
import { Repository } from 'typeorm';
import { PaginationPayload } from '../users/users.model';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
  ) {}

  public async createJob(job: CreateJobDto): Promise<JobEntity> {
    const newJob = this.jobRepository.create(job);
    return this.jobRepository.save(newJob);
  }

  public async getAllWithPagination(payload: PaginationPayload) {
    const total = await this.jobRepository.count();
    const pageCount = this.divideIntoPages(payload, total);
    const items = await this.jobRepository.find({
      skip: (payload.page - 1) * payload.limit,
      take: payload.limit,
      order: { id: 'ASC' },
    });
    return {
      ...payload,
      pageCount,
      items,
    };
  }

  private divideIntoPages(payload: PaginationPayload, total: number): number {
    if (!total) {
      return 0;
    }
    return Math.ceil(total / payload.limit);
  }

  findByCompany(companyId: number) {
    return this.jobRepository.findBy({ companyId });
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
