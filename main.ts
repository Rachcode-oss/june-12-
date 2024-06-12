radio.setGroup(15)
radio.setTransmitPower(8)
basic.forever(function () {
    radio.sendString("Got You :)")
    basic.pause(200)
})
