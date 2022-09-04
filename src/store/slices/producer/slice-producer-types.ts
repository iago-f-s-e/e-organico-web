import { Address } from '../address';

type CertificationType = 'IN CONVERSION' | 'AUDIT' | 'OCS' | 'SPG';

export type Producer = {
  id: string;
  name: string;
  image: string;
  certification: CertificationType;
  address: Address;
  score: {
    transactions: number;
    rating: number;
  };
};
