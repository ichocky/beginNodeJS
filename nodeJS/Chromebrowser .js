// use selenium-webdriver
const webDriver = require('selenium-webdriver');
//to load chrome driver
require('chromedriver');

let By = webDriver.By;

// open chrome browser
let driver = new webDriver.Builder().forBrowser('chrome').build();

(async function () {
    await driver.get('https://www.google.com');
    await driver.findElement(By.id('sb_form_q')).sendKeys('test');
    await driver.findElement(By.id('sb_form_go')).click();
})();