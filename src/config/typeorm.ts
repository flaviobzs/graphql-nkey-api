import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Job } from 'src/jobs/entities/job.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGO_URL,
  entities: [Job],
  synchronize: true,
  autoLoadEntities: true,
  useUnifiedTopology: true,
};
