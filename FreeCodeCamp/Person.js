/*Fill in the object constructor with the following methods below:
getFirstName,getLastName,getFullName, setFirstName(first), setLastName(last), setFullName(full)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.

*/
const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName = function(){
      return firstAndLast.split(' ')[0];
    };
    this.getLastName = function(){
      console.log(firstAndLast)
      return firstAndLast.split(' ')[1];
    };
    this.getFullName = function() {
      return this.getFirstName() + " " + this.getLastName();
    };
    this.setFirstName = function(first){
      let name = firstAndLast.split(' ');
      name.shift();
      name.unshift(first)
      firstAndLast = name.join(' ');
    }
    this.setLastName = function(first){
      let name = firstAndLast.split(' ');
      name.pop();
      name.push(first)
      firstAndLast = name.join(' ');
    }
    this.setFullName = function(fullName){
      let name = fullName.split(' ');
      this.setFirstName(name[0]);
      this.setLastName(name[1]);
    }
  };