radio.onReceivedString(function (undefined) {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("HOLA")
    basic.showString("ENVIADO")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    numero_aleatorio = randint(1, 6)
    radio.sendValue("numA", numero_aleatorio)
    basic.showNumber(numero_aleatorio)
})
let numero_aleatorio = 0
radio.setGroup(1)
basic.forever(function () {
	
})
