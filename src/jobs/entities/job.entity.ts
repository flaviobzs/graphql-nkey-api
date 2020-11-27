import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Job {
  @PrimaryColumn()
  @ObjectIdColumn()
  @Field(() => String, { description: 'id' })
  _id: string;

  @Column()
  @Field(() => String, { description: 'title' })
  @IsNotEmpty()
  title: string;

  @Column()
  @Field(() => String, { description: 'description' })
  @IsNotEmpty()
  description: string;

  @Column()
  @Field(() => String, { description: 'local' })
  @IsNotEmpty()
  local: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
