[{
  id: 'dfwesdv'
}]

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

  getUserList(room){
    var users = this.users.filter((user)=> user.room === room);
    var nameArray = users.map((user)=> user.name);
    /*
    map() is like filter but it lets us return the value we want to use(keep)
    */
    return nameArray;
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
