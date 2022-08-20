import { Exclude, Expose, Transform, Type } from "class-transformer";
import { BaseRes } from "./base.res.dto";

@Exclude()
export class SecondOfferResDto extends BaseRes {
  @Expose()
  id: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.externalOfferId
  })
  campaign_id: string;

  @Expose()
  icon: string;

  @Expose()
  name: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.offerUrlTemplate
  })
  tracking_url: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.requirements
  })
  instructions: string;

  @Expose()
  description: string;

  @Expose()
  @Transform(({ obj }) => {
    return {
      android: obj.isAndroid,
      ios: obj.isIos,
      web: obj.isDesktop,
    }
  })
  OS: Map<string, boolean>
}

@Exclude()
export class SecondOfferMapResDto extends BaseRes {
  @Expose()
  @Type(() => SecondOfferResDto)
  @Transform(({ obj }) => {
    const offers = obj.list.reduce((memo, offer) => {
      memo[offer.id] = new SecondOfferResDto(offer)
      return memo
    }, {})
    return offers;
  })
  Offers: Map<string, SecondOfferResDto>
}

@Exclude()
export class SecondOfferListResDto extends BaseRes {
  @Expose()
  status: string = "success";

  @Expose()
  @Transform(({ obj }) => {
    return new SecondOfferMapResDto({ list: obj.list })
  })
  data: SecondOfferMapResDto
}
