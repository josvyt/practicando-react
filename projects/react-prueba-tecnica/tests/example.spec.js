// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  //Identifica el texto y la imagen
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  //Obtiene el texto y la imagen
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  //Comprueba si existe el texto y la imágen
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()

  //Click en el botón
  await page.click('button')
  await page.waitForTimeout(2000)

  //Identifica el texto y la imagen después del click en el botón
  const nextText = await page.getByRole('paragraph')
  const nextImage = await page.getByRole('img').nth(0)

  const nextTextContent = await nextText.textContent()
  const nextImageSrc = await nextImage.getAttribute('src')

  // Comprueba si el texto y la primera imagen han cambiado
  await expect(nextTextContent).not.toBe(textContent)
  await expect(nextImageSrc).not.toBe(imageSrc)
})