import { getCurrencies } from './currencies';

describe('currencies tests', () => {
  it('should return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
    // expect(result).toContain('BRL');
  });
});
