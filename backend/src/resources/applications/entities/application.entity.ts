import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'applications' })
export class ApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, nullable: false })
  ip: string;
  @Column({ length: 255, nullable: false })
  cvUrl: string;
  @Column({ type: 'varchar', nullable: false })
  letter: string;
}
