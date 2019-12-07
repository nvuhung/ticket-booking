import { Currency } from './consts';

export const formatCurrency = (value: number = 0, hasSuffix: boolean = true) =>
  value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + (hasSuffix ? Currency : '');
