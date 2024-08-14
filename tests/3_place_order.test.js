const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Place Order Test', function() {
  this.timeout(10000); // Increase timeout to 10 seconds
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should place an order successfully', async function() {
    await driver.get('http://demoblaze.com');
    // Ensure that you add items to the cart before placing the order
    const cartButton = await driver.findElement(By.id('cartur'));
    await driver.wait(until.elementIsVisible(cartButton), 10000);
    await cartButton.click();

    const placeOrderButton = await driver.findElement(By.css('button[data-target="#orderModal"]'));
    await driver.wait(until.elementIsVisible(placeOrderButton), 10000);
    await placeOrderButton.click();

    const nameField = await driver.findElement(By.id('name'));
    await driver.wait(until.elementIsVisible(nameField), 10000);
    await nameField.sendKeys('Your Name');

    // Fill out other order details...

    const purchaseButton = await driver.findElement(By.css('button[onclick="purchaseOrder()"]'));
    await driver.wait(until.elementIsVisible(purchaseButton), 10000);
    await purchaseButton.click();
    // Add verification of successful order placement
  });
});
