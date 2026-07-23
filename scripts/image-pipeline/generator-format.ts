import sharp from 'sharp'
import path from 'node:path'
import { GENERATED_DIR, QUALITY } from './utils.js'

type FormatType = 'avif' | 'webp' | 'jpg'

export interface FormatResult {
  path: string
  success: boolean
  error?: string
  width: number
  height: number
}

export async function generateFormat(
  inputPath: string,
  name: string,
  width: number,
  height: number,
  format: FormatType
): Promise<FormatResult> {
  const ext = format === 'jpg' ? 'jpg' : format
  const outputPath = path.join(GENERATED_DIR, `${name}-${width}.${ext}`)

  try {
    let pipeline = sharp(inputPath).resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true,
    })

    if (format === 'avif') {
      pipeline = pipeline.avif({ quality: QUALITY.avif })
    } else if (format === 'webp') {
      pipeline = pipeline.webp({ quality: QUALITY.webp })
    } else {
      pipeline = pipeline.jpeg({ quality: QUALITY.jpg })
    }

    const info = await pipeline.toFile(outputPath)

    return {
      path: outputPath,
      success: true,
      width: info.width || width,
      height: info.height || height,
    }
  } catch (err) {
    return {
      path: outputPath,
      success: false,
      error: err instanceof Error ? err.message : String(err),
      width: width,
      height: height,
    }
  }
}

export async function generateAllFormats(
  inputPath: string,
  name: string,
  width: number,
  height: number
): Promise<{ avifWidth: number; avifHeight: number; webpWidth: number; webpHeight: number; jpgWidth: number; jpgHeight: number }> {
  const results = await Promise.allSettled([
    generateFormat(inputPath, name, width, height, 'avif'),
    generateFormat(inputPath, name, width, height, 'webp'),
    generateFormat(inputPath, name, width, height, 'jpg'),
  ])

  const avif = results[0].status === 'fulfilled' ? results[0].value : null
  const webp = results[1].status === 'fulfilled' ? results[1].value : null
  const jpg = results[2].status === 'fulfilled' ? results[2].value : null

  if (avif && !avif.success) {
    console.warn(`[images] AVIF ${name} ${width}px: ${avif.error}`)
  }
  if (webp && !webp.success) {
    console.warn(`[images] WebP ${name} ${width}px: ${webp.error}`)
  }
  if (jpg && !jpg.success) {
    console.warn(`[images] JPG ${name} ${width}px: ${jpg.error}`)
  }

  return {
    avifWidth: avif?.success ? avif.width : width,
    avifHeight: avif?.success ? avif.height : height,
    webpWidth: webp?.success ? webp.width : width,
    webpHeight: webp?.success ? webp.height : height,
    jpgWidth: jpg?.success ? jpg.width : width,
    jpgHeight: jpg?.success ? jpg.height : height,
  }
}