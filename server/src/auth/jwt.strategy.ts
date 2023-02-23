import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.PRIVATE_KEY,
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const result = { id: payload.sub, email: payload.email };
    const user = await this.userService.getUserByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Невалидный токен',
      });
    }
    return result;
  }
}
