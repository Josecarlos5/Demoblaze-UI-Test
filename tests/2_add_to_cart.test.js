const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Add to Cart Test', function() {
  this.timeout(10000); // Increase timeout to 10 seconds
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should add Iphone 6 32Gb to cart', async function() {
    try {
      await driver.get('https://www.demoblaze.com/prod.html?idp_=5');
      // Wait for the "Add to Cart" button to be present
      await driver.wait(until.elementLocated(By.css('.btn-success')), 10000);
      const addToCartButton = await driver.findElement(By.css('.btn-success'));
      await driver.wait(until.elementIsVisible(addToCartButton), 10000);
      await addToCartButton.click();

      // Handle alert
      await driver.wait(until.alertIsPresent(), 10000);
      await driver.switchTo().alert().accept();
    } catch (error) {
      console.error('Error finding or clicking Iphone 6 32Gb:', error);
      throw error;
    }
  });

  it('should add ASUS Full HD to cart', async function() {
    try {
      await driver.get('https://www.demoblaze.com/prod.html?idp_=14');
      // Wait for the "Add to Cart" button to be present
      await driver.wait(until.elementLocated(By.css('.btn-success')), 10000);
      const addToCartButton = await driver.findElement(By.css('.btn-success'));
      await driver.wait(until.elementIsVisible(addToCartButton), 10000);
      await addToCartButton.click();

      // Handle alert
      await driver.wait(until.alertIsPresent(), 10000);
      await driver.switchTo().alert().accept();
    } catch (error) {
      console.error('Error finding or clicking ASUS Full HD:', error);
      throw error;
    }
  });
});
