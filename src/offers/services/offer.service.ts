import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OfferReqDto } from '../dtos/offer.req.dto'
import { Offer } from '../entities/offer.entity';
import { OfferProviderEnum } from '../enums/offer.provider.enum';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer) private readonly repository: Repository<Offer>
  ) { }

  async create(offer: OfferReqDto): Promise<Offer> {
    const savedOffer = await this.repository.save(offer)
    return savedOffer
  }

  async list(): Promise<Offer[]> {
    const offers = await this.repository.find()
    return offers
  }

  async listByProvider(provider: OfferProviderEnum): Promise<Offer[]> {
    const offers = await this.repository.find({ where: { providerName: provider } })
    return offers
  }

  async findOne(offerId: number): Promise<Offer> {
    const matchedOffer = await this.repository.findOneByOrFail({ id: offerId })
    return matchedOffer;
  }
}
