import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaModelsService } from 'src/prisma-models/prisma-models.service';
import { FiltersUsersInterface } from './interfaces/filters-users.interface';

@Injectable()
export class UsersService {
  

  constructor(
    private prismaService: PrismaModelsService
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.prismaService.user.create(
        {
          data: createUserDto
        }
      )
      return newUser;
    } catch (error) {
      throw new ConflictException('No se pudo crear el usuario por el siguiente motivo: ' + error.message);
    }
  }

  async findAll(filters: FiltersUsersInterface) {
    try {
      const { query } = filters;
      const where = {
        status: true
      }
      if(query){
        where["OR"] = [
              {
                name: {
                  contains: query,
                }
              },
              {
                email: {
                  contains: query,
                }
              },
              {
                phoneNumber: {
                  contains: query,
                }
              }
            ]
      }
      const users = await this.prismaService.user.findMany(
        {
          where: where
        }
      );
      if(users.length === 0)  throw new NotFoundException('No se encontraron usuarios con los parametros proporcionados');
      return users;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const findUser = await this.prismaService.user.findUnique(
        {
          where: {
            id: id
          }
        }
      )
      if(!findUser) throw new NotFoundException('No se encontro el usuario con el ID');
      return findUser;
    } catch (error) {
      throw new ConflictException('No se pudo encontrar el usuario: ' + error.message);
    }
  }

  async updatePersonalInfo(updateUserDto: UpdateUserDto) {
    try {
      const { id, name, lastName } = updateUserDto;
      const dataUpdated = {};
      if(!name && !lastName) throw new NotFoundException('No se proporciono ningun dato para actualizar');
      if(name) dataUpdated["name"] = name;
      if(lastName) dataUpdated["lastName"] = lastName;
      const updateUser = await this.prismaService.user.update({
        where: { id: id },
        data: dataUpdated
      });
      return updateUser;
    } catch (error) {
      // Prisma error code for 'Record to update not found.' is 'P2025'
      if (error.code === 'P2025') {
        throw new NotFoundException(`Error prisma Modelo: ${error.meta.modelName} | Mensaje: ${error.meta.cause}`);
      }
      throw new ConflictException('No se pudo actualizar el usuario: ' + error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
