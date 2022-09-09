// class 
class User {
  constructor(name, yearOfBirth, gender) {
    this.name = name,
      this.yearOfBirth = yearOfBirth,
      this.gender = gender
  }

  // static keyword
  static default() {
    return `Invoked ${this.name} constructor`
  }
}
// extends keyword

class Author extends User {
  constructor(name, yearOfBirth, gender, password) {
    super(name, yearOfBirth, gender),
      this.password = password
  }
}

const a1 = new User('ayanaksha', 2003, 'male')
const dev = new Author('d3v-anaxa', 2003, 'male', '123-AXX-XXXX');

console.log(User.default()); // Invoked User constructor
console.log(a1); // User { name: 'ayanaksha', yearOfBirth: 2003, gender: 'gender' }
console.log(Author.default()); // Invoked Author constructor
console.log(dev); // Author { name: 'd3v-anaxa', yearOfBirth: 2003, gender: 'male', password: '123-AXX-XXXX' }