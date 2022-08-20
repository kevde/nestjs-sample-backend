import { IsBoolean, isDefined, IsDefined, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Offer } from "../entities/offer.entity";
import { OfferBoxSizeEnum } from "../enums/offer.box.size.enum";
import { OfferProviderEnum } from "../enums/offer.provider.enum";

export class OfferReqDto extends Offer {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsDefined()
  name: string;

  @IsDefined()
  slug: string;

  @IsDefined()
  description: string;

  @IsDefined()
  requirements: string;

  @IsDefined()
  thumbnail: string;

  @IsEnum(OfferBoxSizeEnum)
  boxSize: OfferBoxSizeEnum;

  @IsOptional()
  @IsBoolean()
  isDesktop: boolean;

  @IsOptional()
  isAndroid: boolean;

  @IsOptional()
  isIos: boolean;

  @IsDefined()
  @IsString()
  offerUrlTemplate: string;

  @IsEnum(OfferProviderEnum)
  providerName: OfferProviderEnum;

  @IsOptional()
  @IsString()
  externalOfferId: string;
}

export class OfferProviderParams {
  @IsEnum(OfferProviderEnum)
  provider: OfferProviderEnum;
}
