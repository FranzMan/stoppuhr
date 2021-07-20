input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.setLedColor(0xff0000)
})
input.onButtonPressed(Button.B, function () {
    ende = input.runningTime()
    basic.setLedColor(0x00ff00)
    basic.showNumber((ende - start) / 1000)
})
let ende = 0
let start = 0
basic.setLedColor(0x00ff00)
