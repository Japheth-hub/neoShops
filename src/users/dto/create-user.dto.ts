import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

  @ApiProperty({
    example: "Jhon",
    description: "Nombre del usuario",
    required: true,
  })
  @IsNotEmpty({message: "El nombre es obligatorio"})
  @IsString({message: "El nombre debe de ser una cadena de texto"})
  name: string;

  @ApiProperty({
    example: "Doe",
    description: "Apellido del usuario",
    required: true,
  })
  @IsNotEmpty({message: "El apellido es obligatorio"})
  @IsString({message: "El apellido debe de ser una cadena de texto"})
  lastName: string;

  @ApiProperty({
    example: "jhon_doe@email.com",
    description: "Email del usuario",
    required: true,
  })
  email: string;

  @ApiProperty({
    example: "2381546987",
    description: "Numero telefonico del usuario",
    required: true,
  })
  @IsNotEmpty({message: "El numero telefonico es obligatorio"})
  @IsString({message: "El numero telefonico debe de ser una cadena de texto"})
  phoneNumber: string;

  @ApiProperty({
    example: "123456",
    description: "Contraseña del usuario",
    required: true,
  })
  @IsNotEmpty({message: "La contraseña es obligatoria"})
  @IsString({message: "La contraseña debe de ser una cadena de texto"})
  password: string;
}
