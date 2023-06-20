import { QuoteInterface } from 'interfaces/quote';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarDamageInterface {
  id?: string;
  image: string;
  motorist_id?: string;
  created_at?: any;
  updated_at?: any;
  quote?: QuoteInterface[];
  user?: UserInterface;
  _count?: {
    quote?: number;
  };
}

export interface CarDamageGetQueryInterface extends GetQueryInterface {
  id?: string;
  image?: string;
  motorist_id?: string;
}
