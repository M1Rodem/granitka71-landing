import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import { buildImages } from '../scripts/image-pipeline/build.js'

let isBuilding = false
let buildPromise: Promise<void> | null = null

export function imagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-images',
    buildStart: async () => {
      // Если уже строится — пропускаем
      if (isBuilding) {
        return
      }

      // Если уже есть обещание — ждём его
      if (buildPromise) {
        return buildPromise
      }

      const originalsDir = path.join(process.cwd(), 'public/images/originals')

      if (!fs.existsSync(originalsDir)) {
        return
      }

      const images = fs.readdirSync(originalsDir).filter(
        (f) => /\.(jpg|jpeg|png|webp)$/i.test(f) && f !== 'image-meta.json'
      )

      if (images.length === 0) {
        return
      }

      isBuilding = true

      buildPromise = buildImages()
        .catch(() => {
          // молча
        })
        .finally(() => {
          isBuilding = false
          buildPromise = null
        })

      return buildPromise
    },
  }
}