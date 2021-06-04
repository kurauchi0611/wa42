// puppeteerを使えるように
const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin());

// npm insttall puppeteer-extra-plugin-user-data-dir
// npm install puppeteer-extra-plugin-stealth
(async () => {
    // ブラウザを起動 (設定を渡すことができる)
    const browser = await puppeteer.launch({
        executablePath: 'C:\Program Files (x86)\Google\Chrome\Application',
        userDataDir: "/Users/kazunari/Library/Application\ Support/Google/Chrome/",
        headless: false, // フルバージョンのChromeを使用
    });

    // タブを開く
    const page = await browser.newPage();

    // URLバーでURLを入力する
    await page.goto('https://zoom.us/s/96644834244?pwd=QzBaaXJJVkQ1ZnJTQzBHVU1Dd2ozdz09#success');
    
    // 3秒待つ
    await page.waitForTimeout(3000);

    // // スクショ (名前指定)
    // await page.screenshot({path: 'example.png'});

    // ボタンをクリック
    await page.click('div[role="button"]');

    // 3秒待つ
    await page.waitForTimeout(3000);

    await browser.close();
})();
