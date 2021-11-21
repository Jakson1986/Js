'use strict'

const MAX_PLASES = 50;
let firstPlace,
    secondPlace;
let answer = +prompt('Введите номер места')
firstPlace = answer;
secondPlace = firstPlace + 1;

/*if (answer < 1 || answer > MAX_PLASES|| isNaN(answer)) {
    alert('Не правильный номер места! Введите номер от 1 до 50.')
} else if (!(answer % 3)) {
    alert('Место забронированно в связи с карантином')
} else if (answer < 20 || answer > 30) {
    alert('Место забронированно')
} else if (answer > 20 || answer < 30) {
    alert(`Место свободно. Ближайшее место ${secondPlace}`)
    ;
}*/

switch(true) {
    case answer < 1:
    case answer > MAX_PLASES:
    case isNaN(answer):
        alert('Не правильный номер места! Введите номер от 1 до 50.')
        break
    case !(answer % 3):
        alert('Место забронированно в связи с карантином')
        break
    case answer < 20:
    case answer > 30:
        alert('Место забронированно')
        break
    case answer > 20:
    case answer < 30:
        alert(`Место свободно. Ближайшее место ${secondPlace}`)  
        break
}
