radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("Musik ")
    } else if (receivedNumber == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 3) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 4) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
    }
})
