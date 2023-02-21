import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.PRIVATE_KEY,
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const result = { id: payload.sub, email: payload.email };
    if (!result) {
      throw new UnauthorizedException({ message: 'Что-то пошло не так' });
    }
    return result;
  }
}
