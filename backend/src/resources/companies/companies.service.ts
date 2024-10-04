import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  public async create(newCompany: CreateCompanyDto): Promise<CompanyEntity> {
    const companyToCreate = this.companyRepository.create(newCompany);
    return await this.companyRepository.save(companyToCreate);
  }

  public findAll() {
    return `This action returns all companies`;
  }

  public async findByEmail(email: string): Promise<CompanyEntity> {
    return await this.companyRepository.findOneBy({ email });
  }

  public async update(id: number, company: UpdateCompanyDto) {
    return await this.companyRepository.update({ id }, company);
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
