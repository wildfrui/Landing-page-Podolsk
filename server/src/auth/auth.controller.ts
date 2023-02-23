import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto } from './../user/dto/create-user.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  // @Post('/login')
  // login(@Body() userDto: CreateUserDto) {
  //   return this.authService.login({ ...userDto });
  // }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getProfile(@Request() req) {
    return this.userService.getUserByEmail(req.user.email);
  }

  @Post('/register')
  async registration(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }
}
