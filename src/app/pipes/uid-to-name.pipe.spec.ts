import { UidToNamePipe } from './uid-to-name.pipe';

describe('UidToNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UidToNamePipe();
    expect(pipe).toBeTruthy();
  });
});
