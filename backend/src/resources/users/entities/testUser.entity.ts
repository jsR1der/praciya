import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'testUsers' })
export class TestUserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, nullable: false })
  name: string;
  @Column({ length: 255, nullable: false })
  email: string;
  @Column({ length: 13, nullable: false })
  phone: string;
  @Column({ type: 'int', nullable: false })
  position_id: number;
  @Column({ type: 'varchar', nullable: false, length: 255 })
  photo: string;
}
