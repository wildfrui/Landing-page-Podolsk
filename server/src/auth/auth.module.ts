import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: process.env.PRIVATE_KEY,
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
