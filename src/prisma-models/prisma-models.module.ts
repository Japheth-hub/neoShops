import { Module } from '@nestjs/common';
import { PrismaModelsController } from './prisma-models.controller';
import { PrismaModelsService } from './prisma-models.service';

@Module({
  controllers: [PrismaModelsController],
  providers: [PrismaModelsService],
  exports: [PrismaModelsService],
})
export class PrismaModelsModule {}
