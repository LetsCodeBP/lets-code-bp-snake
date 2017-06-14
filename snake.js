'use strict'

export function moveSnake({direction, body}) {
  const head = movePoint(body[0], direction)
  return {
    direction,
    body: [head, ...body.slice(0, body.length - 1)]
  }
}

function movePoint([x, y], direction) {
  return [x + 1, y]
}
