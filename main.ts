let numero_aleatorioA = 0
let numero_aleatorioB = 0
radio.onReceivedNumber(function (receivedNumber) {
    numero_aleatorioA = randint(1, 6)
    if (numero_aleatorioA < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else if (numero_aleatorioA == receivedNumber) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("HOLA")
    basic.showString("ENVIADO")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    numero_aleatorioB = randint(1, 6)
    radio.sendNumber(numero_aleatorioB)
    basic.showNumber(numero_aleatorioB)
})
