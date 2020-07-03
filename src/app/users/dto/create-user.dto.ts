import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserDTO {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsInt()
    readonly age: number;
}