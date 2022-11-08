import { test, expect } from "@playwright/test";

test("should navigate to the spj page", async ({ page }) => {
  // This is index page
  await page.goto("http://localhost:3000/");
  //   SPJ PAGE
  await page.click("#index");
  //   URL Should be spj`
  await expect(page).toHaveURL("http://localhost:3000/");
});
