import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '../schemas/users.schema'
import { UsersService } from '../services/users.service';
import { CreateUserDTO } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findId(@Param() params): Promise<User> {
    return this.usersService.findId(params.id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDTO): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('conn')
  checkConnection(): string {
    return "Connected";
  }
}
