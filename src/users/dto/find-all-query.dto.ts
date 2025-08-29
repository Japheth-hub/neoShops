import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class FindAllQueryDto {
  
  @ApiPropertyOptional({
    example: "Jhon",
    description: "Parametro para filtrar los usuarios por nombre, email o numero telefonico",
    required: false,
  })
  @IsOptional()
  @IsString({
    message: "El query debe de ser una cadena de texto"
  })
  query?: string;

}