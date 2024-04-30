export const formatAsCurrency = (value: number, locale = 'es-ES'): string => {
  if (typeof value !== 'number') {
    throw Error('Value provided is not a number');
  }

  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(value);
};
