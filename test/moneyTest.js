import { Currency } from "../scripts/utils/money.js";

if (Currency(2095) === '20.95')
{
  console.log('Passed');
}
else{
  console.log('failed');
}
if (Currency(0) === '0.00')
{
  console.log('Passed');
}
else{
  console.log('failed');
}
if (Currency(2000.5) === '20.00')
{
  console.log('Passed');
}
else{
  console.log('failed');
}
