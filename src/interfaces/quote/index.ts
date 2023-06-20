import { CompanyInterface } from 'interfaces/company';
import { CarDamageInterface } from 'interfaces/car-damage';
import { GetQueryInterface } from 'interfaces';

export interface QuoteInterface {
  id?: string;
  price: number;
  workshop_id?: string;
  car_damage_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  car_damage?: CarDamageInterface;
  _count?: {};
}

export interface QuoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  workshop_id?: string;
  car_damage_id?: string;
}
