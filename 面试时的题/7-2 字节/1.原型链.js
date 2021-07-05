function Person() {}

person1 = new Person()
person1.a = "hello world"
console.log(Person.a)

Person.b = "hello world b";
person2 = new Person()
console.log(person2.b);

Person.prototype.c = "hello world c";
person3 = new Person()
console.log(person3.c);
