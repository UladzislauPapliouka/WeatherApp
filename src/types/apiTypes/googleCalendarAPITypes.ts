import { GoogleUserInfoType } from '@Types/storeTypes/googleStateTypes';

export interface GoogleEventEntityType {
  start: { dateTime: Date };
  summary: string;
}
export interface GoogleUserEntityType {
  wt: GoogleUserInfoType;
}
