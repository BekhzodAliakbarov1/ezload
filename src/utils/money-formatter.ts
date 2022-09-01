export const moneyFormatter = ({
  currency,
  number,
}: {
  currency: 'USD' | 'UZS' | 'RUB';
  number: number;
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  return formatter.format(number);
};
