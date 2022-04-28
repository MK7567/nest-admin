import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from "./models/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from './user.service';
import { CommonModule } from "../common/common.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    CommonModule,
    AuthModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
