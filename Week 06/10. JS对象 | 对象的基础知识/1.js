class Dog {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }

  bit() {
    return this.damage;
  }
}

class Person {
  constructor(name) {
    this.hp = 100;
    this.name = name;
  }

  hurt(damage) {
    if (this.hp > damage) {
      this.hp -= damage;
      console.log("还剩", this.hp, "血");
    } else {
      this.hp = 0;
      console.log("你死了");
    }
  }
}

let dog = new Dog("小花", 30);
let person = new Person("Damon");

person.hurt(dog.bit());
person.hurt(dog.bit());
person.hurt(dog.bit());
person.hurt(dog.bit());
