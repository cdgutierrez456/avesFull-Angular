import { TontZonas } from './tont_zonas'

export interface Bird {
  _id?: string;
  common_name: string;
  scientific_name: string;
  image?: string,
  createAt?: string;
  updateAt?: string;
  tont_zonas: TontZonas;
}
