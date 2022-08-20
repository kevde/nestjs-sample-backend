import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FirstOfferListResDto } from '../dtos/first.offer.res.dto';
import { OfferProviderParams, OfferReqDto } from '../dtos/offer.req.dto';
import { OfferListResDto, OfferResDto } from '../dtos/offer.res.dto';
import { SecondOfferListResDto } from '../dtos/second.offer.res.dto';
import { Offer } from '../entities/offer.entity';
import { OfferProviderEnum } from '../enums/offer.provider.enum';
import { OfferService } from '../services/offer.service';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class OffersController {
  constructor(
    private readonly offerService: OfferService
  ) { }

  @Get()
  async listOffers() {
    const offers = await this.offerService.list();
    return new OfferListResDto({ list: offers })
  }

  @Get(':provider')
  @UsePipes(new ValidationPipe({
    disableErrorMessages: false,
    transform: true,
  }))
  async listFirstOffers(@Param() params: OfferProviderParams) {
    const offers = await this.offerService.listByProvider(params.provider);
    switch (params.provider) {
      case OfferProviderEnum.FIRST:
        return new FirstOfferListResDto({ list: offers })
      case OfferProviderEnum.SECOND:
        return new SecondOfferListResDto({ list: offers })
      default:
        return new OfferListResDto({ list: offers })
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({
    disableErrorMessages: false,
    transform: false,
  }))
  async createOffer(@Body() offer: OfferReqDto) {
    const savedOffer: Offer = await this.offerService.create(offer)
    const offerDto = new OfferResDto(savedOffer)
    return offerDto;
  }
}
