Solution using Promise:

let check_balance = new Promise((resolve, reject) => {

driver.get("https://explorer.bitcoin.com/btc/address/" + address);

let balance_amount = driver.findElement(webdriver.By.className("amount")).getText();

if (balance_amount > 0) {
    resolve('This wallet has ' + balance_amount + ' Bitcoins.');
}
else {
    reject('0 Bitcoins!');

}})check_balance.then((message) => {

console.log(message);}).catch((message) => {

console.log(message);}) setTimeout(function () {

driver.quit();}, 8000);