import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Offer } from './offers/entities/offer.entity';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [
    OffersModule,
    RouterModule.register([
      { path: 'offers', module: OffersModule }
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://admin:admin@localhost:5432/nestjs-backend?schema=public',
      entities: [Offer],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
      logging: true,
    }),
  ],
})
export class AppModule { }
