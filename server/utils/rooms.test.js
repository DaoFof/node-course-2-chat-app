const expect = require('expect');

const {Rooms} = require('./rooms');

var rooms ;

beforeEach(()=>{
  rooms = new Rooms();
  rooms.rooms =[{
      id: 'Castle of Baratheon',
      type: 'Public',
      key: undefined,
      admin: 'Robert Baratheon'
    },{
      id: 'Castle of Stark',
      type: 'Private',
      key: 'wolf',
      admin: 'Eddard Stark'
    },{
      id: 'Castle of Tywin',
      type: 'Public',
      key: undefined,
      admin: 'Tywin'
    },{
      id: 'Dothraki',
      type: 'Private',
      key: 'strenght',
      admin: 'Khal Drogo'
    }];
});

describe('Rooms',()=>{
  it('should add new room',()=>{
    var rooms =  new Rooms();
    var room = {
      id: 'Castle of Baratheon',
      type: 'Public',
      key: undefined,
      admin: 'Robert Baratheon'
    };
    var resRoom = rooms.addRoom(room.id, room.type, room.key, room.admin);
    expect(rooms.rooms).toEqual([room]);
  });

  it('should remove a room', ()=>{
    var roomId = 'Dothraki';
    var room = rooms.removeRoom(roomId);
    expect(room.id).toBe(roomId);
    expect(rooms.rooms.length).toBe(3);
  });

  it('should not remove a room', ()=>{
    var roomId = 'Lannister';
    var room = rooms.removeRoom(roomId);
    expect(room).toNotExist();
    expect(rooms.rooms.length).toBe(4);
  });

  it('should find a room',()=>{
    var roomId = 'Castle of Baratheon';
    var room = rooms.getRoom(roomId);
    expect(room.id).toBe(roomId);
  });

  it('should not find a room',()=>{
    var roomId = 'Robert Baratheon';
    var room = rooms.getRoom(roomId);
    expect(room).toNotExist();
  })
});
