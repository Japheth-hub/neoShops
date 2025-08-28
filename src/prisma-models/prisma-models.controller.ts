import { Controller } from '@nestjs/common';
import { PrismaModelsService } from './prisma-models.service';

@Controller('prisma-models')
export class PrismaModelsController {
  constructor(private readonly prismaModelsService: PrismaModelsService) {}
}
