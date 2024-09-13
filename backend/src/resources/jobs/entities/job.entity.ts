import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyEntity } from '../../companies/entities/company.entity';
import { CurrencyEnum } from '../../../models/currency.enum';

@Entity({ name: 'jobs' })
export class JobEntity {
  @ManyToOne(() => CompanyEntity, (company: CompanyEntity) => company.jobs)
  @JoinColumn({ name: 'companyId' })
  company: CompanyEntity;
  @Column({ type: 'int' })
  companyId: number;
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, nullable: false })
  companyName: string;
  @Column({ length: 255, nullable: false })
  jobTitle: string;
  @Column({ length: 255, nullable: true })
  city: string;
  @Column({ type: 'int', nullable: false })
  fork: number;
  @Column({ type: 'enum', enum: CurrencyEnum, nullable: false })
  currency: CurrencyEnum;
  @Column({ length: 255, nullable: false })
  description: string;
  @Column({ length: 255, nullable: false })
  phone: string;
  @Column({ length: 255, nullable: false })
  email: string;
  @Column({ type: 'int', default: 0 })
  views: number;
  @Column({ type: 'int', default: 0 })
  applications_sent: number;
  @Column({ type: 'timestamptz', nullable: false, default: new Date() })
  created_at: string;
  @Column({ type: 'timestamptz', nullable: false, default: new Date() })
  updated_at: string;
}
