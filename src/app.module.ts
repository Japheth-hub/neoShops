import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModelsModule } from './prisma-models/prisma-models.module';

@Module({
  imports: [UsersModule, PrismaModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
