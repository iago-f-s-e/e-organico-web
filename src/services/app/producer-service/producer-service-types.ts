import { Address } from '../address-service';

type CertificationType = 'IN CONVERSION' | 'AUDIT' | 'OCS' | 'SPG';

export type PendingProducer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  certificationType: CertificationType;
  address: Address;
};
