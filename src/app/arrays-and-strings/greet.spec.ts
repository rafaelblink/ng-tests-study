import { greet } from './greet';

describe('greet tests', () => {
  it('should include the name in the message', () => {
    expect(greet('rafael')).toContain('rafael');
  });
});
