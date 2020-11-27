import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateJobInput {
  @Field(() => String, { description: 'title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field(() => String, { description: 'description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => String, { description: 'local' })
  @IsNotEmpty()
  @IsString()
  local: string;
}
