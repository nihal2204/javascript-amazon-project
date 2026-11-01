import { Currency } from "../scripts/utils/money.js";

describe('test-Suite : Currency ' , () => {
  it ('Convert Cents into Dollars' , () =>{
    expect(Currency(2095)).toEqual('20.95');
  });

  it('Works with 0' , () => {
    expect(Currency(0)).toEqual('0.00');
  });

  it('Works with 2000.5' , () => {
    expect(Currency(2000.5)).toEqual('20.00');
  })
});