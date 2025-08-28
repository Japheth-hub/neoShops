import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaModelsService } from 'src/prisma-models/prisma-models.service';

@Injectable()
export class UsersService {
  

  constructor(
    private prismaService: PrismaModelsService
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log("🚀 ~ UsersService ~ create ~ createUserDto:", createUserDto)
    try {
      const newUser = await this.prismaService.user.create(
        {
          data: createUserDto
        }
      )
      return newUser;
    } catch (error) {
      console.log("🚀 ~ UsersService ~ create ~ error:", error)
      throw error;
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
