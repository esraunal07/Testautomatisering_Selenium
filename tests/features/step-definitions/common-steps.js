import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

const url = "http://localhost:3000"; 


export const openCafe = async (driver) => {
  await driver.get(url);
};

export const clickButton = async (driver, buttonText) => {
  const xpath = `//li[contains(translate(normalize-space(text()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "${buttonText.toLowerCase()}")]`;
  const button = await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  await button.click();
};

export const checkHealth = async (driver, expectedHealth) => {
  const healthElement = await driver.findElement(By.css('.health .val'));
  const actualHealth = await healthElement.getText();
  expect(parseInt(actualHealth)).to.equal(expectedHealth);
};

export const checkMoney = async (driver, expectedMoney) => {
  const moneyElement = await driver.findElement(By.css('.money .val'));
  const actualMoney = await moneyElement.getText();
  expect(parseInt(actualMoney)).to.equal(expectedMoney);
};

  Given('that I am outside the cafe', async function () {
    await openCafe(this.driver);
  });
  
  
  Given('my initial health is {int}', async function (initialHealth) {
    this.initialHealth = initialHealth; 
  });
  
  
  Then('my health should be {int}', async function (expectedHealth) {
    const healthElement = await this.driver.findElement(By.css('.health .val'));
    const actualHealth = parseInt(await healthElement.getText());
  
    console.log(`Expected Health: ${expectedHealth}, Actual Health: ${actualHealth}`);
  
    expect(actualHealth).to.equal(expectedHealth);
  });
  
  
  Then('my money should be {int}', async function (expectedMoney) {
    await checkMoney(this.driver, expectedMoney);
  });
  
  
  When('I wait without taking action', async function () {
    await this.driver.sleep(2000); 
  });


  
