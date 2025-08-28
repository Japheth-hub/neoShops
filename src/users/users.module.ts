import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModelsModule } from 'src/prisma-models/prisma-models.module';

@Module({
  imports: [
    forwardRef(() => PrismaModelsModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
