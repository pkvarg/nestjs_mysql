import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { typeOrmConfigAsync } from './typeorm/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
