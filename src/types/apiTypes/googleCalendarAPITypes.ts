import { GoogleUserInfoType } from '@typing/storeTypes/googleStateTypes';

export interface IGoogleEventEntity {
  start: { dateTime: Date };
  summary: string;
}
export interface IGoogleUserEntity {
  wt: GoogleUserInfoType;
}
