import { test, expect } from "@playwright/test";

const baseurl = "http://localhost:3000/";
const psdm = { email: "ilham.iyadillah@gmail.com", password: "Secret123" };
const bph = { email: "hiyadillah@gmail.com", password: "Secret123" };

// prequisite : database spj harus dikosongkan
test.describe("Testing menggunakan akun divisi PSDM", () => {
  test.beforeEach(async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto(`${baseurl}auth/login`);
    await expect(page).toHaveURL(baseurl + `auth/login`);
    // fill the form
    await page.fill("input[name=email]", psdm.email);
    await page.fill("input[name=password]", psdm.password);
    // click submit
    await page.click("input[type=submit]");
    // accept alert notif
    await page.on("dialog", (dialog) => {
      console.log(dialog.message);
      dialog.accept();
    });
    // The new URL should be "/"
    await expect(page).toHaveURL(`${baseurl}`);
  });
  test("TC14 - Pengajuan RAB Sukses", async ({ page }) => {
    await page.goto(baseurl + `rab/upload`);
    await page.fill("input[name=name]", "Ilkomerz Night");
    await page.locator("input[name=file]").setInputFiles("public/img/logo.png");
    await page.click("button[type=submit]");

    await page.waitForTimeout(500);
    const name = page.locator("input[name=name]");
    await expect(name).toHaveValue("");
    const file = page.locator("input[name=file]");
    await expect(file).toHaveValue("");

    await page.goto(`${baseurl}rab`);
    const item = page.locator("tr#item");
    await expect(item).toBeDefined();
  });
  test("TC15 - Pengajuan RAB Gagal", async ({ page }) => {
    await page.goto(baseurl + `rab/upload`);
    await page.fill("input[name=name]", "Ilkomerz Night");
    await page.locator("input[name=file]").setInputFiles("public/test.pdf");
    await page.click("button[type=submit]");

    await page.waitForTimeout(500);
    await page.on("dialog", (dialog) => {
      expect(dialog.message).toMatch("Cannot read property 'filename' of undefined");
      dialog.dismiss();
    });

    await expect(page.getByLabel("Nama Proker")).toHaveValue("Ilkomerz Night");
    await expect(page.getByLabel("Upload File")).toBeTruthy();
  });
  test.afterEach(async ({ page }) => {
    await page.reload();
    await page.locator("button#logout").click();
  });
});
test.describe("Testing menggunakan akun divisi BPH", () => {
  test.beforeEach(async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto(`${baseurl}auth/login`);
    await expect(page).toHaveURL(baseurl + `auth/login`);
    // fill the form
    await page.fill("input[name=email]", bph.email);
    await page.fill("input[name=password]", bph.password);
    // click submit
    await page.click("input[type=submit]");
    // accept alert notif
    await page.on("dialog", (dialog) => {
      console.log(dialog.message);
      dialog.accept();
    });
    // The new URL should be "/"
    await expect(page).toHaveURL(baseurl + ``);
  });
  test("TC18 - Pemberian status dan komentar RAB", async ({ page }) => {
    await page.goto(baseurl + `rab`);

    // we want choose one from few of the row
    const index = 0;
    // mencari button dari suatu index dari row yang memiliki nama 1 di awal
    // ^ mencari awal dari sebuah string dan \d mencari angka
    const row = page.getByRole("row", { name: /^\d/ }).nth(index);
    await expect(row).toBeVisible();
    await row.locator("#edit").click();

    await expect(page).toHaveURL(`${baseurl}rab/revisi`);
    // fill the value and submit
    await page.fill("input[name=status]", "REVISI");
    await page.fill("input[name=comment]", "Tambahin yang satunya lagi");
    await page.click("button[type=submit]");

    // accept alert notif
    await page.waitForTimeout(500);
    await page.on("dialog", (dialog) => {
      console.log(dialog.message);
      dialog.accept();
    });

    await page.goto(`${baseurl}rab`);
    // check if the changes are made
    await expect(row.locator("#status")).toHaveText("REVISI");
    await expect(row.locator("#comment")).toHaveText("Tambahin yang satunya lagi");
  });
  test.afterEach(async ({ page }) => {
    await page.reload();
    await page.locator("button[id=logout]").click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(`${baseurl}auth/login`);
  });
});
