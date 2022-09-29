import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('heroes')
export class Hero {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { name: 'name' })
  name: string

  @Column('varchar', { name: 'power' })
  power: string
}
