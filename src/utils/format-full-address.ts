import { Address } from '@src/types/models';
import { capitalize } from './capitalize';
import { handleInputMask } from './masks';

const isNumber = (number: string) => number.toLowerCase() !== 's/n';

export const formatFullAddress = (address: Address): string => {
  const street = address.street ? capitalize(address.street) : null;
  const number = address.number && isNumber(address.number) ? address.number : null;
  const complement = address.complement ? capitalize(address.complement) : null;
  const zipCode = address.zipCode ? handleInputMask(address.zipCode, 'zipCode') : null;
  const district = capitalize(address.district);
  const city = capitalize(address.city);
  const state = capitalize(address.state);

  const cityAndState = `${city} - ${state}`;

  const fullAddress = [street, number, complement, zipCode, district, cityAndState]
    .filter((value) => value)
    .join(', ');

  return fullAddress;
};
