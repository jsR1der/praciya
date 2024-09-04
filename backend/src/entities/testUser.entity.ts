import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'testUsers' })
export class TestUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, nullable: false })
  name: string;
  @Column({ length: 255, nullable: false })
  email: string;
  @Column({ length: 12, nullable: false })
  phone: string;
  @Column({ type: 'int', nullable: false })
  position_id: number;
  @Column({ type: 'bytea', nullable: false })
  photo: Buffer;
}
