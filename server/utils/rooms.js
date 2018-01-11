//getRoom(id)
//addRoom(id, type, key, admin)
//removeRoom(id)

class Rooms{
  constructor(){
    this.rooms = [];
  }


  addRoom(id, type, key, admin, activeUser){
    var room = {id, type, key, admin, activeUser};
    this.rooms.push(room);
    return room;
  }

  getRoom(id){
    return this.rooms.filter((room)=> room.id===id)[0];
  }

  removeRoom(id){
    var room =  this.getRoom(id);
    if(room){
      this.rooms = this.rooms.filter((room)=> room.id!==id);
    }

    return room;
  }
}

module.exports = {Rooms}
