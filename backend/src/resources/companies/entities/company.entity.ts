import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { JobEntity } from '../../jobs/entities/job.entity';

@Entity({ name: 'companies' })
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, nullable: false })
  name: string;
  @Column({ length: 255, nullable: false })
  linkedIn: string;
  @Column({ length: 255, nullable: false })
  dou: string;
  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
  @OneToMany(() => JobEntity, (job) => job.company)
  jobs: JobEntity[];
}
