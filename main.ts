sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    info.changeLifeBy(1)
    spaceDuck.startEffect(effects.hearts, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . c b a c . . . . . .
        . . . . c c b c f a c . . . . .
        . . . . a f b b b a c . . . . .
        . . . . a f f b a f c c . . . .
        . . . . c b b a f f c . . . . .
        . . . . . b b a f a . . . . . .
        . . . . . . c b b . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spaceDuck, 200, 0)
    projectile.startEffect(effects.ashes, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    spaceDuck.startEffect(effects.confetti, 200)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spaceDuck: Sprite = null
spaceDuck = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
spaceDuck.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spaceDuck, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . c c c c c c . . . . . .
        . . . c 6 7 7 7 7 6 c . . . . .
        . . c 7 7 7 7 7 7 7 7 c . . . .
        . c 6 7 7 7 7 7 7 7 7 6 c . . .
        . c 7 c 6 6 6 6 c 7 7 7 c . . .
        . f 7 6 f 6 6 f 6 7 7 7 f . . .
        . f 7 7 7 7 7 7 7 7 7 7 f . . .
        . . f 7 7 7 7 6 c 7 7 6 f c . .
        . . . f c c c c 7 7 6 f 7 7 c .
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c
        . c 7 7 2 7 7 c f c 6 7 7 6 c c
        c 1 1 1 1 7 6 f c c 6 6 6 c . .
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . .
        f 6 1 1 1 1 1 6 6 6 6 6 c f . .
        . f 6 1 1 1 1 1 1 6 6 6 f . . .
        . . c c c c c c c c c f . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
