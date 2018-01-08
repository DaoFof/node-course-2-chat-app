const expect =  require('expect');
var {isRealString} =  require('./validation');

describe('isRealString',()=>{
  it('should reject non-string values',()=>{
    expect(isRealString(7755)).toBe(false);
  });
  it('should reject string with only spaces',()=>{
    expect(isRealString('     ')).toBe(false);
  });
  it('should allow string with non-space characters',()=>{
    expect(isRealString('feadsgqeva ')).toBe(true);
  });
});
