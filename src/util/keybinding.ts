export interface iKeyBinding {
    UP: Phaser.Input.Keyboard.Key,
    DOWN: Phaser.Input.Keyboard.Key,
    LEFT: Phaser.Input.Keyboard.Key,
    RIGHT: Phaser.Input.Keyboard.Key,
    ROLL: Phaser.Input.Keyboard.Key,
    ATTACK: Phaser.Input.Keyboard.Key,
    SPECIAL: Phaser.Input.Keyboard.Key
}

export default function KeyBinding(scene: Phaser.Scene): { [ k:string ] : Phaser.Input.Keyboard.Key} {
    return Object.assign({}, scene.input.keyboard.addKeys({
        'UP'      : Phaser.Input.Keyboard.KeyCodes.W,
        'DOWN'    : Phaser.Input.Keyboard.KeyCodes.S,
        'LEFT'    : Phaser.Input.Keyboard.KeyCodes.A,
        'RIGHT'   : Phaser.Input.Keyboard.KeyCodes.D,
        'ROLL'    : Phaser.Input.Keyboard.KeyCodes.H,
        'ATTACK'  : Phaser.Input.Keyboard.KeyCodes.J,
        'BLOCK'   : Phaser.Input.Keyboard.KeyCodes.K,
        'SPECIAL' : Phaser.Input.Keyboard.KeyCodes.SPACE
    }))
}
