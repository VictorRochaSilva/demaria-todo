import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    // Carregando as variáveis de ambiente
    ConfigModule.forRoot(),

    // Configuração assíncrona do TypeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa o ConfigModule para injetar o ConfigService
      inject: [ConfigService], // Injeta o ConfigService para acessar as variáveis de ambiente
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // Tipo do banco de dados
        host: configService.get<string>('DATABASE_HOST'), // Carrega a variável DATABASE_HOST
        port: configService.get<number>('DATABASE_PORT'), // Carrega a variável DATABASE_PORT
        username: configService.get<string>('DATABASE_USER'), // Carrega a variável DATABASE_USER
        password: configService.get<string>('DATABASE_PASSWORD'), // Carrega a variável DATABASE_PASSWORD
        database: configService.get<string>('DATABASE_NAME'), // Carrega a variável DATABASE_NAME
        entities: [User, Task], // Define as entidades
        synchronize: process.env.NODE_ENV !== 'production',
      }),
    }),

    // Módulos do sistema
    UsersModule,
    TasksModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
