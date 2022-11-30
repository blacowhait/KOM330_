import { test, expect } from "@playwright/test";

test.describe("Testing Truends", () => {
  test.describe("Authentikasi", () => {
    test("TC07 - Registrasi Sukses", async ({ page }) => {
      // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
      await page.goto("http://localhost:3000/auth/register");
      // page have to be in the url
      await expect(page).toHaveURL("http://localhost:3000/auth/register");
      // fill the form
      await page.fill("input[name=username]", "ikan");
      await page.fill("input[name=email]", "ikan@gmail.com");
      await page.fill("input[name=password]", "Secret123");
      await page.fill("input[name=dept]", "medbrand");
      // click submit
      await page.click("input[type=submit]");
      // accept alert notif
      await page.on("dialog", (dialog) => {
        // expect(dialog.message).toMatch("Registrasi Berhasil! Silahkan cek email anda untuk verifikasi email");
        console.log(dialog.message);
        dialog.accept();
      });
      await page.waitForTimeout(500);
      // The new URL should be "/"
      await expect(page).toHaveURL("http://localhost:3000/auth/login");
    });
    test("TC09 - Registrasi Gagal", async ({ page }) => {
      // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
      await page.goto("http://localhost:3000/auth/register");
      // page have to be in the url
      await expect(page).toHaveURL("http://localhost:3000/auth/register");
      // fill the form
      await page.fill("input[name=username]", "ikan");
      await page.fill("input[name=email]", "ikan@gmail.com");
      await page.fill("input[name=password]", "Secret123");
      await page.fill("input[name=dept]", "medbrand");
      // click submit
      await page.click("input[type=submit]");
      // accept alert notif
      await page.on("dialog", (dialog) => {
        // expect(dialog.message).toMatch("Registrasi Berhasil! Silahkan cek email anda untuk verifikasi email");
        console.log(dialog.message);
        dialog.accept();
      });
      await page.waitForTimeout(500);
      // The new URL should be "/"
      await expect(page).toHaveURL("http://localhost:3000/auth/register");
    });
    test("TC04 - Login Sukses", async ({ page }) => {
      // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
      await page.goto("http://localhost:3000/auth/login");
      await expect(page).toHaveURL("http://localhost:3000/auth/login");
      // fill the form
      await page.fill("input[name=email]", "ilham.iyadillah@gmail.com");
      await page.fill("input[name=password]", "Secret123");
      // click submit
      await page.click("input[type=submit]");
      // accept alert notif
      await page.on("dialog", (dialog) => {
        console.log(dialog.message);
        dialog.accept();
      });
      // The new URL should be "/"
      await expect(page).toHaveURL("http://localhost:3000/");
    });
  });
  test.describe("SPJ", () => {
    test.beforeEach(async ({ page }) => {
      // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
      await page.goto("http://localhost:3000/auth/login");
      await expect(page).toHaveURL("http://localhost:3000/auth/login");
      // fill the form
      await page.fill("input[name=email]", "ilham.iyadillah@gmail.com");
      await page.fill("input[name=password]", "Secret123");
      // click submit
      await page.click("input[type=submit]");
      // accept alert notif
      await page.on("dialog", (dialog) => {
        console.log(dialog.message);
        dialog.accept();
      });
      // The new URL should be "/"
      await expect(page).toHaveURL("http://localhost:3000/");
    });
    test("TC14", async ({ page }) => {
      await page.goto("http://localhost:3000/spj/upload");
      await page.fill("input[name=name]", "Ilkomerz Night");
      await page.locator("input[name=file]").setInputFiles("public/img/logo.png");
      await page.click("button[type=submit]");

      await page.waitForTimeout(500);
      const name = page.locator("input[name=name]");
      await expect(name).toHaveValue("");
      const file = page.locator("input[name=file]");
      await expect(file).toHaveValue("");
    });
  });
});
