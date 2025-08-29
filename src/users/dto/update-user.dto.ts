import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {

  @ApiProperty({
    example: 1,
    description: "ID del usuario",
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiPropertyOptional({
    example: "Jhon",
    description: "Nombre del usuario",
    required: false,
  })
  @IsOptional()
  @IsString({ message: "El nombre debe de ser una cadena de texto" })
  name?: string;

  @ApiPropertyOptional({
    example: "Doe",
    description: "Apellido del usuario",
    required: false,
  })
  @IsOptional()
  @IsString({ message: "El apellido debe de ser una cadena de texto" })
  lastName?: string;
}

