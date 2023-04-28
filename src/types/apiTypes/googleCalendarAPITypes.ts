import { GoogleUserInfoType } from '@Types/storeTypes/googleStateTypes';

export interface IGoogleEventEntity {
  start: { dateTime: Date };
  summary: string;
}
export interface IGoogleUserEntity {
  wt: GoogleUserInfoType;
}
