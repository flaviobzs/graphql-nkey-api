import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JobsService } from './jobs.service';
import { Job } from './entities/job.entity';
import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';

@Resolver(() => Job)
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Mutation(() => Job)
  createJob(@Args('createJobInput') createJobInput: CreateJobInput) {
    return this.jobsService.create(createJobInput);
  }

  @Query(() => [Job], { name: 'jobs' })
  findAll() {
    return this.jobsService.findAll();
  }

  @Query(() => Job, { name: 'job' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.jobsService.findOne(id);
  }

  @Mutation(() => Job)
  updateJob(@Args('updateJobInput') updateJobInput: UpdateJobInput) {
    return this.jobsService.update(updateJobInput);
  }

  @Mutation(() => Boolean)
  removeJob(@Args('id', { type: () => String }) id: string) {
    return this.jobsService.remove(id);
  }
}
