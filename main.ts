let sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (mbit_Input.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_Input.enRocker.Up
    )) {
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (mbit_Input.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_Input.enRocker.Down
    )) {
        sprite.change(LedSpriteProperty.Y, -1)
    } else if (mbit_Input.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_Input.enRocker.Left
    )) {
        sprite.change(LedSpriteProperty.X, 1)
    } else if (mbit_Input.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_Input.enRocker.Right
    )) {
        sprite.change(LedSpriteProperty.X, 1)
    } else if (mbit_Input.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_Input.enRocker.Press
    )) {
        music.playMelody("F G A B - A B - ", 363)
    }
})
