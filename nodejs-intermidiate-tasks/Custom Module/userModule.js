// Using module.exports for a single export
class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

module.exports = User;