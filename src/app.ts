// <reference path="../type/phaser.d.ts"/>
import * as Phaser from 'phaser';

import TitleScene from './scene/000_02_TitleScreen';

const config = {
    type: Phaser.AUTO,
    width: 375,
    height: 812,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x: 0, y:0}
        }
    },
    scene: [TitleScene]
}

window['GAME'] = new Phaser.Game(config)
