const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Login Test', function() {
  this.timeout(10000); // Increase timeout to 10 seconds
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should login with valid credentials', async function() {
    await driver.get('http://demoblaze.com');
    const loginButton = await driver.findElement(By.id('login2'));
    await driver.wait(until.elementIsVisible(loginButton), 10000);
    await loginButton.click();

    const usernameField = await driver.findElement(By.id('loginusername'));
    await driver.wait(until.elementIsVisible(usernameField), 10000);
    await usernameField.sendKeys('your-username');

    const passwordField = await driver.findElement(By.id('loginpassword'));
    await driver.wait(until.elementIsVisible(passwordField), 10000);
    await passwordField.sendKeys('your-password');

    const loginSubmitButton = await driver.findElement(By.css('button[onclick="logIn()"]'));
    await driver.wait(until.elementIsVisible(loginSubmitButton), 10000);
    await loginSubmitButton.click();
    // Add verification of successful login
  });
});

