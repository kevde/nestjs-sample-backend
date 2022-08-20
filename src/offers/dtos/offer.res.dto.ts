import { Exclude, Expose, Transform, Type } from "class-transformer";
import { Offer } from "../entities/offer.entity";
import { OfferBoxSizeEnum } from "../enums/offer.box.size.enum";
import { BaseRes } from "./base.res.dto";

@Exclude()
export class OfferResDto extends BaseRes {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  slug: string;

  @Expose()
  description: string;

  @Expose()
  requirements: string;

  @Expose()
  thumbnail: string;

  @Expose()
  boxSize: OfferBoxSizeEnum;

  @Expose()
  isDesktop: boolean;

  @Expose()
  isAndroid: boolean;

  @Expose()
  isIos: boolean;

  @Expose()
  offerUrlTemplate: string;

  @Expose()
  providerName: string;

  @Expose()
  externalOfferId: string;
}

@Exclude()
export class OfferListResDto extends BaseRes {
  @Expose()
  @Transform(({ obj }) => {
    return obj.list.map((offer) => new OfferResDto(offer))
  })
  offers: OfferResDto[]
}