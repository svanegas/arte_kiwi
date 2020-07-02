export function formatPrice(price) {
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });
  return priceFormatter.format(price);
}
