import chokidar from 'chokidar'
import path from 'node:path'
import { buildImages } from './build-images.js'

const ORIGINALS_DIR = path.join(process.cwd(), 'public/images/originals')

console.log('Watching images...')

let isBuilding = false
let pending = false

async function build(fileName?: string) {
  if (isBuilding) {
    pending = true
    return
  }

  isBuilding = true
  pending = false

  try {
    await buildImages(fileName)
  } catch (err) {
    console.error(`[images] Error: ${err}`)
  }

  isBuilding = false
  if (pending) build()
}

const watcher = chokidar.watch(ORIGINALS_DIR, {
  ignored: /(^|[\\/])[^.]/,
  persistent: true,
})

watcher.on('add', (filepath) => {
  const name = path.basename(filepath)
  if (name === 'image-meta.json') return
  console.log(`[images] ${name} added`)
  build(filepath)
})

watcher.on('change', (filepath) => {
  const name = path.basename(filepath)
  if (name === 'image-meta.json') {
    console.log('[images] metadata changed, rebuilding all')
    build()
    return
  }
  console.log(`[images] ${name} changed`)
  build(filepath)
})

watcher.on('unlink', (filepath) => {
  const name = path.basename(filepath)
  if (name === 'image-meta.json') return
  console.log(`[images] ${name} removed, rebuilding all`)
  build()
})

console.log(`📁 Watching ${ORIGINALS_DIR}`)