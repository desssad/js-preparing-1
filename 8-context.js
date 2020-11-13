//CONTEXT

// const person = {
//   surname: "Stark",

//   knows: function (what, name) {
//     console.log(`You ${what} know, ${name}  ${this.surname}`)
//   },
// }

// const john = { surname: "Snow" }

// person.knows("all", "Bran")
// person.knows.call(john, "nothing", "John")
// person.knows.apply(john, ["nothing", "John"])
// person.knows.bind(john, ...["nothing", "John"])() //в отличии от остальных выше не вызывает Ф, а возвращает новую. Либо так вызываем ()(), либо ниже

// const bound = person.knows.bind(john, "nothing", "John") //либо вызываем так
// bound() //либо вызываем так

//--------------------------

// function Person(name, age) {
//   this.name = name
//   this.age = age
//   console.log(this)
// }

// const elena = new Person("Elena", 20)

//----------------------
//Явный binding ("EXPLISET")

// function logThis() {
//   console.log(this)
// }

// const obj = { num: 42 }

// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// //НЕявный binding ("EMPLEASET")
// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this)
//   },
// }

// animal.logThis()

//-------------ARROW FUNCTION--
function Cat(color) {
  this.color = color
  console.log("This", this)
  ;(() => console.log("Arrow this", this))()
}

new Cat("red")
