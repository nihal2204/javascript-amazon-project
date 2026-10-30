export function Currency(pricecents)
{
  return (pricecents/100).toFixed(2);
}