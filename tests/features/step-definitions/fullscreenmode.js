import { Given, When, Then } from '@cucumber/cucumber';
import { By, Key } from 'selenium-webdriver';
import { expect } from 'chai';


When('I start the game at {string}', async function (url) {
  await this.driver.get(url);
});

Given('click on the full screen button', async function () {
  await this.driver.findElement(By.css('.go-fullscreen')).click();
  await this.driver.sleep(2000)
})

Then('I should switch to full screen mode', async function () {
  let iElement = await this.driver.findElement(By.css('i'));
  expect(iElement).to.not.have.property('::before');
  await this.driver.sleep(2000)
  await action.sendKeys(Key.ESCAPE).trigger()
});