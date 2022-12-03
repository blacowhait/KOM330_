import { test, expect } from "@playwright/test";

const baseurl = "http://localhost:3000/";
const psdm = { email: "ilham.iyadillah@gmail.com", password: "Secret123" };
const bph = { email: "hiyadillah@gmail.com", password: "Secret123" };
const akun = { username: "ikan", email: "ikan@gmail.com", password: "Secret123", dept: "medbrand" };
const akun2 = { username: "berudu", email: "berudu@gmail.com", password: "Secret123", dept: "medbrand" };

test.describe.serial("Authentikasi", () => {
  test("TC04 - Registrasi Sukses", async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto(baseurl + `auth/register`);
    // page have to be in the url
    await expect(page).toHaveURL(baseurl + `auth/register`);
    // fill the form
    await page.fill("input[name=username]", akun.username);
    await page.fill("input[name=email]", akun.email);
    await page.fill("input[name=password]", akun.password);
    await page.fill("input[name=dept]", akun.dept);
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
    await expect(page).toHaveURL(baseurl + `auth/login`);
  });
  // registrasi dengan email bodong
  test("TC05 - Registrasi Gagal", async ({ page }) => {
    await page.goto(baseurl + `auth/register`);
    // page have to be in the url
    await expect(page).toHaveURL(baseurl + `auth/register`);
    // fill the form
    await page.fill("input[name=username]", akun.username);
    await page.fill("input[name=email]", "babiguling69@rocket.idn");
    await page.fill("input[name=password]", akun.password);
    await page.fill("input[name=dept]", akun.dept);
    // click submit
    await page.click("input[type=submit]");
    // accept alert notif
    await page.on("dialog", (dialog) => {
      expect(dialog.message()).toMatch('"email" must be a valid email');
      dialog.accept();
    });
    await expect(page).toHaveURL(baseurl + `auth/register`);
  });
  // registrasi dengan email yang sudah terdaftar
  test("TC06 - Registrasi Gagal", async ({ page }) => {
    await page.goto(baseurl + `auth/register`);
    // page have to be in the url
    await expect(page).toHaveURL(baseurl + `auth/register`);
    // fill the form
    await page.fill("input[name=username]", akun.username);
    await page.fill("input[name=email]", akun.email);
    await page.fill("input[name=password]", akun.password);
    await page.fill("input[name=dept]", akun.dept);
    // click submit
    await page.click("input[type=submit]");
    // accept alert notif
    await page.on("dialog", (dialog) => {
      expect(dialog.message()).toMatch("Register gagal, email sudah ada");
      dialog.accept();
    });
    await expect(page).toHaveURL(baseurl + `auth/register`);
  });
  test("TC07 - Login Sukses", async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto(baseurl + `auth/login`);
    await expect(page).toHaveURL(baseurl + `auth/login`);
    // fill the form
    await page.fill("input[name=email]", psdm.email);
    await page.fill("input[name=password]", psdm.password);
    // click submit
    await page.click("input[type=submit]");
    // accept alert notif
    await page.on("dialog", (dialog) => {
      expect(dialog.message()).toMatch("Login Berhasil!");
      dialog.accept();
    });
    // The new URL should be "/"
    await expect(page).toHaveURL(baseurl + ``);
  });
  // login dengan email yang belum diregistrasi dan diverifikasi
  test("TC08 - Login Gagal", async ({ page }) => {
    await page.goto(`${baseurl}auth/login`);
    await expect(page).toHaveURL(`${baseurl}auth/login`);

    await page.fill("input[name=email]", akun2.email);
    await page.fill("input[name=password]", akun2.password);
    await page.click("input[type=submit]");

    await page.on("dialog", (dialog) => {
      expect(dialog.message()).toMatch("Login gagal, email tidak ditemukan");
      dialog.accept();
    });
  });
  // login dengan email yang belum diverifikasi tapi sudah diregistrasi
  test("TC09 - Login Gagal", async ({ page }) => {
    await page.goto(`${baseurl}auth/login`);
    await expect(page).toHaveURL(`${baseurl}auth/login`);

    await page.fill("input[name=email]", akun.email);
    await page.fill("input[name=password]", akun.password);
    await page.click("input[type=submit]");

    await page.on("dialog", (dialog) => {
      expect(dialog.message()).toMatch("Login gagal, email belum diverifikasi");
      dialog.accept();
    });
  });
});
