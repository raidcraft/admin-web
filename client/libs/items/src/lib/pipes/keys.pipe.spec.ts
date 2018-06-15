import { KeysPipe } from './keys.pipe';

describe('KeysPipe', () => {

  let pipe: KeysPipe;

  beforeEach(() => {
    pipe = new KeysPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return only the keys', () => {
    const result = pipe.transform(KeyPipeTest);

    expect(result).toEqual(["TEST1", "TEST2", "TEST3", "TEST4", "TEST5", "TEST6"]);
  });

  it('should return empty array for empty enum', () => {
    expect(pipe.transform(KeyPipeTest2)).toEqual([]);
  });

  it('should work on single value enums', () => {
    expect(pipe.transform(KeyPipeTest3)).toEqual(["TEST1"]);
  })
});

export enum KeyPipeTest {
  TEST1 = 'Test 1',
  TEST2 = 'Test 2',
  TEST3 = 'Test 3',
  TEST4 = 'Test 4',
  TEST5 = 'Test 5',
  TEST6 = 'Test 6'
}

export enum KeyPipeTest2 {}

export enum KeyPipeTest3 {
  TEST1 = 'Test1'
}
