import { CreateJobInput } from './create-job.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateJobInput extends PartialType(CreateJobInput) {
  @Field(() => String, { description: 'id' })
  // @IsNotEmpty()
  @IsString()
  @IsOptional()
  id?: string;

  @Field(() => String, { description: 'title' })
  // @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => String, { description: 'description' })
  // @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => String, { description: 'local' })
  // @IsNotEmpty()
  @IsString()
  @IsOptional()
  local?: string;
}
