import { join, dirname } from 'path'
import { fileURLToPath } 'url'
const currentDir = dirname(fileURLToPath(import.meta.url))
const root = join(currentDir, '../')
const audioDirectory = join(root, 'audio')
const publicDirectory = join(root, 'public')

export default{
    port: process.env.PORT 
    dir:{
        root,
        publicDirectory,
        audioDirectory,
        songsDirectory: join(audioDirectory, 'song')
        fxDirectory: join(audioDirectory, 'fx')
    }
}