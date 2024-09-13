import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyEntity } from '../../companies/entities/company.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, nullable: false })
  name: string;
  @Column({ length: 255, nullable: false })
  nickname: string;
  @Column({ length: 255, nullable: false })
  email: string;
  @Column({ type: 'boolean' })
  email_verified: boolean;
  @Column({ type: 'timestamptz', nullable: false })
  updated_at: string;
  @Column({ length: 255, nullable: false })
  picture: string;
  @OneToOne(() => CompanyEntity)
  @JoinColumn()
  company: CompanyEntity;
}
