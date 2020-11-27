import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfig } from './config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    GraphQLModule.forRoot({
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // context: ({ req }) => ({ req }),
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      // isGlobal: true,
    }),
    JobsModule,
  ],
})
export class AppModule {}
