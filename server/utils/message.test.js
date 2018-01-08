var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');
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

describe('generateLocationMessage',()=>{
  it('should generate correct locat object',()=>{
    var from= 'Daouda';
    var latitude = 15;
    var longitude = 12;
    var url = 'https://www.google.com/maps?q=15,12';
    var locationMessage = generateLocationMessage(from,latitude,longitude);
    expect(locationMessage.createAt).toBeA('number');
    expect(locationMessage).toInclude({from,url});
  });
});
