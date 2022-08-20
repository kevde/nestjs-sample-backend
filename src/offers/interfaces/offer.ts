import { OfferBoxSizeEnum } from '../enums/offer.box.size.enum';

export interface IOffer {
  // primary column for offer id
  id: number;

  // offer name
  name: string;

  // unique identifier for offer
  slug: string;

  // offer description 
  description: string;

  // offer requirements
  requirements: string;

  // offer thumbnail image url
  thumbnail: string;

  // size of offer thumbnail image - large, small
  boxSize: OfferBoxSizeEnum;

  // indicates if offer is available for desktop 
  isDesktop: boolean;

  // indicates if offer is available for android
  isAndroid: boolean;

  // indicates if offer is available for ios
  isIos: boolean;

  // offer url template
  offerUrlTemplate: string;

  // provider name - this should be static for each offer type
  // we're attaching two offer payloads - offer1, offer2
  // so for offer1 payload, this should be "offer1"
  // for offer2 payload, this should be "offer2"
  providerName: string;

  // offer id from external provider 
  externalOfferId: string;
}