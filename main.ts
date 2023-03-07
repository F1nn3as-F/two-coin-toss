input.onPinPressed(TouchPin.P0, function () {
    basic.showString("SCORE")
    basic.showString("PLAYER 1 =")
    basic.showNumber(Player1)
    basic.showString("PLAYER 2 =")
    basic.showNumber(Player2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    Coin1 = randint(1, 2)
    Coin2 = randint(1, 2)
    if (Coin1 == 1 && Coin2 == 1) {
        basic.showString("HEADS + HEADS")
        Player1 += 1
        basic.showString("PLAYER 1 =")
        basic.showNumber(Player1)
    } else if (Coin1 == 2 && Coin2 == 2) {
        basic.showString("TAILS + TAILS")
        Player1 += 1
        basic.showString("PLAYER 1 =")
        basic.showNumber(Player1)
    } else if (Coin1 == 1 && Coin2 == 2 || Coin1 == 2 && Coin2 == 1) {
        basic.showString("HEADS + TAILS")
        Player2 += 1
        basic.showString("PLAYER 2 =")
        basic.showNumber(Player2)
    }
})
let Coin2 = 0
let Coin1 = 0
let Player2 = 0
let Player1 = 0
Player1 = 0
Player2 = 0
basic.showString("2 PLAYER HEADS OR TAILS")
basic.showString("PRESS A+B TO START")
basic.showString("PRESS PIN 0 TO DISPLAY SCORE")
