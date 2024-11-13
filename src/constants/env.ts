import path from 'path'
import dotenv from 'dotenv';
import { existsSync } from 'fs';

const isProduction = process.env.NODE_ENV === 'production';

dotenv.config({
  debug: !isProduction,
})

const envFile = path.join(process.cwd(), `.env.${process.env.NODE_ENV}`)

if (existsSync(envFile)) {
  dotenv.config({
    path: envFile,
    override: true
  })
}