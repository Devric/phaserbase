import { Scene } from 'phaser'

export default class SceneBase extends Scene {
    public get gameWidth(): number {
        return this.sys.game.config.width as number
    }
    public get gameHeight(): number {
        return this.sys.game.config.height as number
    }
    protected setView(): void {
        this.cameras.main.centerOn(0,0)
    }
}
