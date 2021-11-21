'use strict'

const MAX_PLASES = 50;
let firstPlace,
    secondPlace;
let answer = +prompt('Введите номер места');

if (answer < 1 || answer > MAX_PLASES|| isNaN(answer)) {
    alert('Не правильный номер места! Введите номер от 1 до 50.')
} else if (!(answer % 3)) {
    alert('Место забронированно в связи с карантином')
} else if (answer < 20 || answer > 30) {
    alert('Место забронированно')
} else if (answer > 20 || answer < 30) {
    firstPlace = answer;
    secondPlace = firstPlace + 1;
    alert(`Место свободно. Ближайшее место ${secondPlace}`)
}

/*switch(firstPlace) {
    case ''
}*/