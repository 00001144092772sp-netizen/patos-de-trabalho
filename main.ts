input.onPinPressed(TouchPin.P0, function () {
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
})
