import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import { buildImages } from '../scripts/build-images.js'

export function imagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-images',
    buildStart: async () => {
      const originalsDir = path.join(process.cwd(), 'public/images/originals')

      if (!fs.existsSync(originalsDir)) {
        return
      }

      const images = fs.readdirSync(originalsDir).filter(
        (f) => /\.(jpg|jpeg|png|webp)$/i.test(f) && f !== 'image-meta.json'
      )

      if (images.length === 0) return

      try {
        await buildImages()
      } catch {
        // silent
      }
    },
  }
}