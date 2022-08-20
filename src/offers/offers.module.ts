import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { OffersController } from './controllers/offers.controller';
import { Offer } from './entities/offer.entity';
import { OfferService } from './services/offer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Offer], {
    type: 'postgres',
    namingStrategy: new SnakeNamingStrategy(),
  })],
  controllers: [OffersController],
  providers: [OfferService],
})
export class OffersModule {}
