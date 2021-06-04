// puppeteerを使えるように
const puppeteer = require('puppeteer');

(async () => {
    // ブラウザを起動 (設定を渡すことができる)
    const browser = await puppeteer.launch({
      executablePath: 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
        headless: false, // フルバージョンのChromeを使用
    });

    // タブを開く
    const page = await browser.newPage();

    // URLバーでURLを入力する
    await page.goto('');
    
    // 3秒待つ
    await page.waitForTimeout(30000);

    // スクショ (名前指定)
    await page.screenshot({path: 'example.png'});

    await browser.close();
})();
