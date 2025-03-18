// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Hash da senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Cria um novo usuário com a senha hasheada
    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    // Salva o usuário no banco de dados
    return await this.usersRepository.save(user);
  }

  async findOneByEmail(email: string): Promise<User | null> {
    // Busca um usuário pelo email
    const user = await this.usersRepository.findOne({ where: { email } });
    return user || null;
  }
}
