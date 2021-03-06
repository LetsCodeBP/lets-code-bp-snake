'use strict'

import gameFactory from './game.js'
import {config} from './config.js'

const CANVAS_WIDTH = config.SIZE[0] * config.TILE_SIZE
const CANVAS_HEIGHT = config.SIZE[1] * config.TILE_SIZE

const canvas = document.querySelector('.game-canvas')
const context = canvas.getContext('2d')

const game = gameFactory((snakePoints) => {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  snakePoints.forEach(([x, y]) => {
    const drawnTileSize = config.TILE_SIZE - 2 * config.TILE_PADDING; 
    context.fillRect(
      x * config.TILE_SIZE + config.TILE_PADDING,
      y * config.TILE_SIZE + config.TILE_PADDING,
      drawnTileSize,
      drawnTileSize
    )
  })
})

setInterval(game.tick, 200)

const KEY_CODE_TO_DIRECTION = {
  '37': 'left',
  '38': 'top',
  '39': 'right',
  '40': 'bottom'
}

document.body.addEventListener('keydown', event => {
  if (event.keyCode >= 37 && event.keyCode <= 40) {
    game.onArrowEvent(KEY_CODE_TO_DIRECTION[event.keyCode])
  }
})
