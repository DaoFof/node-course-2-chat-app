//addUser(id, room, name)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users{
  constructor(){
    this.users = [];
  }

  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
    // return user that was removed
    var user =  this.getUser(id);
    if(user){
      this.users = this.users.filter((user)=> user.id!==id);
    }

    return user;
  }

  getUser(id){
    return this.users.filter((user)=> user.id===id)[0];
  }
  getUserByName(name){
    return this.users.filter((user)=>user.name===name)[0];
  }

  getUserList(room){
    var nameArray = "";
    if(!room){
      nameArray = this.users.map((user)=> user.name);
    }else{
      var users = this.users.filter((user)=> user.room === room);
      nameArray = users.map((user)=> user.name);
    }
    /*
    map() is like filter but it lets us return the value we want to use(keep)
    */
    return nameArray;
  }
  getRoomList(){
    var rooms = this.users.map((user)=>user.room);
    return rooms;
  }
}

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription(){
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Andrew', 25);
// var description = me.getUserDescription();
// console.log(description);

module.exports = {Users};
