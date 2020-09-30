#  Phase Typescript / Webpack Base


## Getting Started

Install dependencies
`npm install`

Run webpack server default port 8080
`npm run dev`

Build into ZIP
`npm run build`

Run test (Jest)
- automatically looks for extension with .text.ts

`npm test`
`npm coverage`



## Game Mechnics
### inventory
- items
- potions
- weapons
### documentation
- tutorial
- guides
### character
- progression
- skill tree
- classes
- stats
### abilities
- skills
- effects
- magics
### assets
- gfx
- sfx
- tiles
### props
- npc
- shop
- town
- dialogue
- quests
### world
- areas
- quests
### character
- monster
- behaviours
- factions
### intereaction
- combats
- movement



## References
memory management with groups
https://blog.ourcade.co/posts/2020/phaser-3-optimization-object-pool-class/


html5 metadata
https://blog.ourcade.co/posts/2020/native-like-web-app-for-your-html5-game/


Creating UI component with jsx
https://blog.ourcade.co/posts/2020/dom-element-button-phaser-3-typescript-rxjs-jsx/


spine plugin
https://blog.ourcade.co/posts/2020/how-to-get-phaser-spine-plugin-work-without-npm/


field of view
https://blog.ourcade.co/posts/2020/phaser3-mrpas-fov-field-of-view-algorithm-roguelike-dungeon-crawler/

fog of war
https://blog.ourcade.co/posts/2020/phaser3-fog-of-war-field-of-view-roguelike/


scene transtion
https://blog.ourcade.co/posts/2020/phaser-3-fade-out-scene-transition/

AI
https://blog.ourcade.co/posts/2020/state-pattern-ai-player-control-phaser-3/

yotuube
https://www.youtube.com/c/Ourcadehq/videos


MMO
https://phasertutorials.com/how-to-create-a-phaser-3-mmorpg-part-1/


State
https://blog.ourcade.co/posts/2020/state-pattern-character-movement-phaser-3/


pluggins
https://github.com/RetroVX/phaser3-juice-plugin


grids
https://www.youtube.com/watch?v=JeTY0wfVtXg

drag and drop
https://www.youtube.com/watch?v=t56DvozbZX4&list=PLkpBJaFZykNDspZT7IPi2YlV4ybNu0RXF&index=45&t=0s

scalable visual
https://www.youtube.com/watch?v=ZWIZeGAXuSA&list=PLkpBJaFZykNDspZT7IPi2YlV4ybNu0RXF&index=47&t=0s

generate dungeon
https://github.com/mikewesthad/dungeon
https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-3-procedural-dungeon-3bc19b841cd

other
https://www.youtube.com/user/dearthsmiter/videos

opensource graphics
https://itch.io/game-assets/free

texture packer
https://www.youtube.com/watch?v=qEoD3ZXpR4c
http://free-tex-packer.com/webpack/
https://github.com/imagemin/imagemin
https://github.com/sporadic-labs/tile-extruder

isomatrics
http://rotates.org/phaser/iso/
https://gamedevelopment.tutsplus.com/tutorials/creating-isometric-worlds-primer-for-game-developers-updated--cms-28392

hexagons
https://www.emanueleferonato.com/2015/01/29/understanding-hexagonal-tiles-updated-with-html5-examples-thanks-to-phaser/
https://github.com/matlintz/Phaser-3-documented-examples/blob/master/src/scenes/HexGridScene.ts
https://www.emanueleferonato.com/2015/01/29/understanding-hexagonal-tiles-updated-with-html5-examples-thanks-to-phaser/


settext
    text.setText([
        'x: ' + pointer.x,
        'y: ' + pointer.y,
        'mid x: ' + pointer.midPoint.x,
        'mid y: ' + pointer.midPoint.y,
        'velocity x: ' + pointer.velocity.x,
        'velocity y: ' + pointer.velocity.y,
        'movementX: ' + pointer.movementX,
        'movementY: ' + pointer.movementY
    ]);

loader after scene created
https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/#loading-after-preload-stage

smooth antimation using delta
https://phaser.io/examples/v3/view/timestep/variable-smooth-step

path fiding
https://blog.ourcade.co/posts/2020/phaser-3-point-click-pathfinding-movement-tilemap/
https://github.com/prettymuchbryce/easystarjs
https://gamedevacademy.org/how-to-use-pathfinding-in-phaser/
https://jsfiddle.net/juwalbose/pu0gt7nc/
