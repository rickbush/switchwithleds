function LEDtest () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(200)
    }
    pins.digitalWritePin(DigitalPin.P16, 0)
}
LEDtest()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.pause(1000)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(500)
    }
})
