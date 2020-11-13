//Prototypes
//__proto__ - указывает на прототип родительского класса или обьекта от которого был создан данный обьект(в ДжС любое наслодование происходит через прототипированое наследование)
//данная опция стала доступна в ЕС6,т.к. в ЕС5 для этого использовалось Object.getPrototypeOf( )

function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says myau`)
}

// const cat = new Cat("Kot", "white")

// cat.voice()

// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__)
// console.log(cat.constructor)

//-----------------------

function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = "white"

const person = new Person()
person.name = "Roman"

// console.log("skin" in person)
// console.log(person.legs)
// console.log(person.name)

// console.log(person.hasOwnProperty("skin"))

let myProto = { year: 2019 }
const myYear = Object.create(myProto)

console.log(myYear.year) //2019
// console.log(myYear.hasOwnProperty("year")) //false

myProto = { year: 999 }

console.log(myYear.year)
