import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async create(createJobInput: CreateJobInput): Promise<Job> {
    const job = this.jobRepository.create(createJobInput);
    return await this.jobRepository.save(job);
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.find();
  }

  async findOne(id: string): Promise<Job> {
    const job = await this.jobRepository.findOne(id);

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    return job;
  }

  async update(updateJobInput: UpdateJobInput): Promise<Job> {
    const job = await this.jobRepository.findOne(updateJobInput.id);

    if (!job) {
      throw new NotFoundException(`The job not found.`);
    }

    return await this.jobRepository.save({ ...job, ...updateJobInput });
  }

  async remove(id: string): Promise<boolean> {
    await this.jobRepository.delete(id);

    const job = await this.jobRepository.findOne(id);

    if (!job) {
      return true;
    }

    return false;
  }
}
