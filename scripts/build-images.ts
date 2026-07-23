import { buildImages } from './image-pipeline/build.js'

export { buildImages }

const targetFile = process.argv.find((arg) => arg.startsWith('--file='))
const fileName = targetFile ? targetFile.replace('--file=', '') : null

buildImages(fileName || undefined).catch((err) => {
  console.error(err)
  process.exit(1)
})