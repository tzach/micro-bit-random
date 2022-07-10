input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
