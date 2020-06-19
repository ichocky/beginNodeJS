// use selenium-webdriver
const webDriver = require('selenium-webdriver');
//to load chrome driver
require('chromedriver');

let By = webDriver.By;
 
// open chrome browser
let driver = new webDriver.Builder().forBrowser('chrome').build();

(async function () {
    await driver.get('https://www.bing.com');
    await driver.findElement(By.id('sb_form_q')).sendKeys('www.landmark.co.uk');
    await driver.findElement(By.id('sb_form_go')).click();
})();