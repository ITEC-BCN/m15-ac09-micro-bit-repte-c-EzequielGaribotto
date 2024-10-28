let numero_aleatorio = 0
let numero_aleatorioB = 0
radio.onReceivedNumber(function (receivedNumber) {
    numero_aleatorio = randint(1, 6)
    if (numero_aleatorio < receivedNumber) {
        basic.showIcon(IconNames.Sad)
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
