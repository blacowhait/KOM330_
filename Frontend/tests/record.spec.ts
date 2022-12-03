import { test, expect, Page } from "@playwright/test";
import { isAssetError } from "next/dist/client/route-loader";
import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";

const baseurl = "http://localhost:3000/";
const psdm = { email: "ilham.iyadillah@gmail.com", password: "Secret123" };
const gagal = { name: "asdasd", detail: "asdas", quantity: "1231231231231231231", amount: "1231231231231231231" };
// prequisite : database spj harus dikosongkan
test.describe.serial("Testing menggunakan akun divisi PSDM", () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });
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
  test("TC10 - Penambahan Pencatatan Pemasukan Sukses", async ({ page }) => {
    await page.goto(`${baseurl}cashflow`);
    await expect(page).toHaveURL(`${baseurl}cashflow`);
    await page.waitForTimeout(500);

    // CEK JUMLAH DATA
    let count = 1;
    if (await page.locator("#pendapatan").first().isVisible()) {
      count = await page.locator("#pendapatan").count();
      console.log(await page.locator("#pendapatan").count());
    }

    // clik tambah pendapatan dengan menggunakan <Link> yg pertama
    // await page.waitForSelector("#upload");
    await expect(page.locator("#upload").first()).toBeVisible();
    const upload = await page.locator("#upload").first();
    await upload.click();

    // ISI FORM
    await expect(page).toHaveURL(/upload/);
    await page.getByLabel("Nama").fill("Ilkomerz Night");
    await page.getByLabel("Detail").fill("Modal Merchendise Slayer");
    await page.getByLabel("Quantity").fill("25");
    await page.getByLabel("Amount").fill("15000");
    await page.getByRole("button", { name: "upload" }).click();

    // ALERT
    await page.on("dialog", (dialog) => {
      console.log(dialog.message());
      expect(dialog.message()).toMatch("Upload Berhasil");
    });

    // CEK VALUE FORM
    await expect(page.getByLabel("Nama")).toHaveValue("");
    await expect(page.getByLabel("Detail")).toHaveValue("");
    await expect(page.getByLabel("Quantity")).toHaveValue("");
    await expect(page.getByLabel("Amount")).toHaveValue("");

    await page.goto(`${baseurl}cashflow`);
    await expect(page).toHaveURL(`${baseurl}cashflow`);

    await expect(await page.locator("#pendapatan").count()).toEqual(count + 1);
  });
  test("TC11 - Penambahan Pencatatan Pemasukan Gagal", async ({ page }) => {
    await page.goto(`${baseurl}cashflow`);
    await expect(page).toHaveURL(`${baseurl}cashflow`);
    await page.waitForTimeout(500);

    // CEK JUMLAH DATA
    let count = 1;
    const items = page.locator("#pendapatan");
    if (await page.locator("#pendapatan").first().isVisible()) {
      count = await page.locator("#pendapatan").count();
      console.log(await page.locator("#pendapatan").count());
    }

    // clik tambah pendapatan dengan menggunakan <Link> yg pertama
    // await page.waitForSelector("#upload");
    await expect(page.locator("#upload").first()).toBeVisible();
    const upload = await page.locator("#upload").first();
    await upload.click();

    // ISI FORM
    await expect(page).toHaveURL(/upload/);
    await page.getByLabel("Nama").fill(gagal.name);
    await page.getByLabel("Detail").fill(gagal.detail);
    await page.getByLabel("Quantity").fill(gagal.quantity);
    await page.getByLabel("Amount").fill(gagal.amount);
    await page.getByRole("button", { name: "upload" }).click();

    // ALERT
    await page.on("dialog", (dialog) => {
      console.log(dialog.message());
      expect(dialog.message()).toMatch('"amount" must be a safe number');
    });

    // CEK VALUE FORM
    await expect(page.getByLabel("Nama")).toHaveValue(gagal.name);
    await expect(page.getByLabel("Detail")).toHaveValue(gagal.detail);
    await expect(page.getByLabel("Quantity")).toHaveValue(gagal.quantity);
    await expect(page.getByLabel("Amount")).toHaveValue(gagal.amount);
  });
  test("TC12 - Penambahan Pencatatan Pengeluaran Sukses", async ({ page }) => {
    await page.goto(`${baseurl}cashflow`);
    await expect(page).toHaveURL(`${baseurl}cashflow`);
    await page.waitForTimeout(500);

    // CEK JUMLAH DATA
    let count = 1;
    if (await page.locator("#pengeluaran").first().isVisible()) {
      count = await page.locator("#pengeluaran").count();
      console.log(await page.locator("#pengeluaran").count());
      //   output = 1
    }

    // clik tambah pengeluaran dengan menggunakan <Link> yg pertama
    // await page.waitForSelector("#upload");
    await expect(page.locator("#upload").last()).toBeVisible();
    const upload = await page.locator("#upload").last();
    await upload.click();

    // ISI FORM
    await expect(page).toHaveURL(/upload/);
    await page.getByLabel("Nama").fill("Ilkomerz Night");
    await page.getByLabel("Detail").fill("Modal Merchendise Slayer");
    await page.getByLabel("Quantity").fill("25");
    await page.getByLabel("Amount").fill("15000");
    await page.getByRole("button", { name: "upload" }).click();

    // ALERT
    await page.on("dialog", (dialog) => {
      console.log(dialog.message());
      expect(dialog.message()).toMatch("Upload Berhasil");
    });

    // CEK VALUE FORM
    await expect(page.getByLabel("Nama")).toHaveValue("");
    await expect(page.getByLabel("Detail")).toHaveValue("");
    await expect(page.getByLabel("Quantity")).toHaveValue("");
    await expect(page.getByLabel("Amount")).toHaveValue("");

    await page.goto(`${baseurl}cashflow`);
    await expect(page).toHaveURL(`${baseurl}cashflow`);

    await expect(await page.locator("#pengeluaran").count()).toEqual(count + 1);
  });
  test("TC13 - Penambahan Pencatatan Pengeluaran Gagal", async ({ page }) => {
    await page.goto(`${baseurl}cashflow`);
    await expect(page).toHaveURL(`${baseurl}cashflow`);
    await page.waitForTimeout(500);

    // CEK JUMLAH DATA
    let count = 1;
    const items = page.locator("#pengeluaran");
    if (await page.locator("#pengeluaran").first().isVisible()) {
      count = await page.locator("#pengeluaran").count();
      console.log(await page.locator("#pengeluaran").count());
    }

    // clik tambah pendapatan dengan menggunakan <Link> yg pertama
    // await page.waitForSelector("#upload");
    await expect(page.locator("#upload").first()).toBeVisible();
    const upload = await page.locator("#upload").last();
    await upload.click();

    // ISI FORM
    await expect(page).toHaveURL(/upload/);
    await page.getByLabel("Nama").fill(gagal.name);
    await page.getByLabel("Detail").fill(gagal.detail);
    await page.getByLabel("Quantity").fill(gagal.quantity);
    await page.getByLabel("Amount").fill(gagal.amount);
    await page.getByRole("button", { name: "upload" }).click();

    // ALERT
    await page.on("dialog", (dialog) => {
      console.log(dialog.message());
      expect(dialog.message()).toMatch('"amount" must be a safe number');
    });

    // CEK VALUE FORM
    await expect(page.getByLabel("Nama")).toHaveValue(gagal.name);
    await expect(page.getByLabel("Detail")).toHaveValue(gagal.detail);
    await expect(page.getByLabel("Quantity")).toHaveValue(gagal.quantity);
    await expect(page.getByLabel("Amount")).toHaveValue(gagal.amount);
  });
  test.afterEach(async ({ page }) => {
    await page.reload();
    await page.locator("button#logout").click();
  });
});
