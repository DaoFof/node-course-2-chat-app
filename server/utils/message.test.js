var expect = require('expect');

var {generateMessage} = require('./message');
describe('generateMessage',()=> {
  it('should generete the correct message object',()=>{
    var from = 'Daouda';
    var text = 'This is a test';
    var message = generateMessage(from, text);
    // expect(message.from).toBe(from);
    // expect(message.text).toBe(text);
    // expect(typeof(message.createAt)).toBe('number');
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from,text});
    });
});
