export enum guestSituation {
  CANCELED='CANCELED', 
  CONFIRMED='CONFIRMED', 
  PENDING='PENDING',
};

export type guestType = {
  id: number;
  name: string;
  situation: guestSituation;
  __typename: string;
};

export type invitationType = {
  hash: string;
  name: string;
  qrCode: string;
  ddi: string;
  phone: string;
  guests: Array<guestType>;
  __typename: string;
};

export type guestStatusType = {
  id: number;
  situation: guestSituation;
}

export type guestsStatusType = Array<guestStatusType>;