import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'testUsers' })
export class TestUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  name: string;
  @Column({ length: 255 })
  email: string;
  @Column({ length: 12 })
  phone: string;
  @Column({ type: 'int' })
  position_id: number;
  @Column({ type: 'bytea' })
  photo: File;
}
