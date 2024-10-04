import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobEntity } from '../../jobs/entities/job.entity';

@Entity({ name: 'companies' })
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, nullable: false })
  name: string;
  @Column({ length: 255, nullable: false })
  phone: string;
  @Column({ length: 255, nullable: false })
  email: string;
  @Column({ type: 'boolean' })
  email_verified: boolean;
  @Column({ type: 'timestamptz', nullable: false })
  updated_at: string;
  @Column({ length: 255, nullable: false })
  picture: string;
  @Column({ length: 255, nullable: false, default: '' })
  linkedIn: string;
  @Column({ length: 255, nullable: false, default: '' })
  dou: string;
  // @OneToOne(() => UserEntity)
  // @JoinColumn()
  // user: UserEntity;
  @OneToMany(() => JobEntity, (job) => job.company)
  jobs: JobEntity[];
}
