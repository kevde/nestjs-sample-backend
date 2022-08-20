import { Exclude, Expose, Transform } from "class-transformer"
import { BaseRes } from "./base.res.dto"

@Exclude()
export class FirstOfferResDto extends BaseRes {
  @Expose()
  @Transform(({ obj }) => obj.externalOfferId)
  offer_id: string;

  @Expose()
  @Transform(({ obj }) => obj.name)
  offer_name: string;

  @Expose()
  @Transform(({ obj }) => obj.description)
  offer_desc: string;

  @Expose()
  @Transform(({ obj }) => obj.requirements)
  call_to_action: string;

  @Expose()
  @Transform(({ obj }) => obj.offerUrlTemplate)
  offer_url: string;

  @Expose()
  @Transform(({ obj }) => obj.offerUrlTemplate)
  offer_url_easy: string;

  @Expose()
  @Transform(({ obj }) => obj.thumbnail)
  image_url: string;

  @Expose()
  @Transform(({ obj }) => obj.thumbnail)
  image_url_220x124: string;


  @Expose()
  @Transform(({ obj }) => {
    let platforms = []
    if (obj.isDesktop) {
      platforms.push('desktop')
    }
    if (obj.isAndroid) {
      platforms.push('android')
    }
    if (obj.isIos) {
      platforms.push('ios')
    }

    return platforms.join(',')
  })
  platform: string;
}

@Exclude()
export class FirstOfferListResDto extends BaseRes {
  @Expose()
  currency_name: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.list.length
  })
  offers_count: number;

  @Expose()
  @Transform(({ obj }) => {
    return obj.list.map(offer => new FirstOfferResDto(offer))
  })
  offers: FirstOfferResDto[];
}
