input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            . # . # .
            `)
    }
    basic.showLeds(`
        . # . . .
        # # . . .
        # # . . #
        . # # # .
        # . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        # # . . .
        # # . . #
        . # # # .
        . # . # .
        `)
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            . # . # .
            `)
    }
    images.createBigImage(`
        . . . . . . # . . .
        # # . . . # # . . .
        # # # . . # # . . #
        # # # . . . # # # .
        # # . . . # . . . #
        `).scrollImage(-1, 200)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . .
            . # # . #
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . .
            . # # . .
            . # # # #
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    if ("a" == receivedString) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . . .
                # # . . .
                . # . . #
                # # # # .
                . # . # .
                `)
            basic.showLeds(`
                . # . . .
                # # . . .
                # # . . .
                . # # # #
                . # . # .
                `)
            basic.showLeds(`
                . # . . .
                # # . . .
                # # . . #
                . # # # .
                . # . # .
                `)
        }
    }
    if ("b" == receivedString) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . . .
                # # . . .
                . # . . #
                # # # # .
                . # . # .
                `)
            basic.showLeds(`
                . # . . .
                # # . . .
                # # . . #
                . # # # .
                . # . # .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . # .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            . # . # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . . .
            # # . . .
            . # . . #
            # # # # .
            . # . # .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            . # . # .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    images.createBigImage(`
        # # # # . . . . . .
        . . # . . . # . . .
        . # . . . # # . . .
        # . . . . # # . . #
        # # # # . . # # # .
        `).scrollImage(1, 200)
})
radio.setGroup(1)
basic.showLeds(`
    . # . . .
    # # . . .
    # # . . #
    . # # # .
    . # . # .
    `)
basic.forever(function () {
	
})
