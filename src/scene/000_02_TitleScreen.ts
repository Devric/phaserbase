import SceneBase from './SceneBase'

export default class TitleScene extends SceneBase {
    create() {
        var text = this.add.text(this.gameWidth / 2 , this.gameHeight / 2, `Hi`)
    }
}
