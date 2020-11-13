//Immediate Invoke Funktion Expression - ФУНКЦИЯ МОМЕНТАЛЬНО ВЫПОЛНЯЕТСЯ (ИСПОЛЬЗУЕТСЯ ДЛЯ СОЗДАНИЯ ЛОКАЛЬНОГО СКОУПА, ОБЫЧНО ЗАКРЫТЫ СКОБКАМИ И ВЫЗЫВАЮТСЯ МОМЕНТАЛЬНО)

let result = []
// for (var i = 0; i < 5; i++) {  //ВЫВОДИТ ЦИФРУ 5 ПО ЛЮБОМУ ИНДЕКСУ, РЕШАЕТСЯ ЗАМЕНОЙ НА let ЛИБО ВТОРОЙ СПОСОБ
//   result.push(function () {
//     console.log(i)
//   })
// }

for (var i = 0; i < 5; i++) {
  ;(function () {
    var j = i
    result.push(function () {
      console.log(j)
    })
  })()
}

result[2]()
result[4]()
