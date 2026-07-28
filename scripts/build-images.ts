import { buildImages } from './image-pipeline/build.js'

const targetFile = process.argv.find((arg) => arg.startsWith('--file='))
const fileName = targetFile ? targetFile.replace('--file=', '') : null
const force = process.argv.includes('--force') || process.argv.includes('-f')

buildImages(fileName || undefined, { force }).catch((err) => {
  console.error(err)
  process.exit(1)
})