import { FirstUpperCaseLetterPipe } from './first-upper-case-letter.pipe';

describe('FirstUpperCaseLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstUpperCaseLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
