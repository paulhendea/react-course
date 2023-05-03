import { test, expect } from '@playwright/test'
import { CAT_IMAGE_BASE_URL } from '../src/constants/index.js'

const LOCALHOST_URL = 'http://localhost:5173/'

test('App shows cat fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_IMAGE_BASE_URL)).toBeTruthy()
})
