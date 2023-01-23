export const moneyFormatter = ({
  currency,
  number,
}: {
  currency: 'USD' | 'UZS' | 'RUB';
  number: number;
}) => {
  const formatter = new Intl.NumberFormat(
    localStorage.getItem('language') ?? 'en',
    {
      style: 'currency',
      currency,
      notation: 'standard',
      currencyDisplay: 'code',
    }
  );
  return formatter.format(number).split('.')[0];
};
