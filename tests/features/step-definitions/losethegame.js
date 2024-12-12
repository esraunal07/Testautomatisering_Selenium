import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I click on {string}', async function (buttonName) {
  let buttons = await this.driver.findElements(By.css('ul li'));
  for (let button of buttons) {
    if (await button.getText() === buttonName) {
      await button.click();
      break;
    }
  }
});

Then('the value of my {string} should decrease', async function (statusType) {
  let cssSelector = `.${statusType.toLowerCase()} .progress .val`;
  let element = await this.driver.findElement(By.css(cssSelector));
  let initialValue = +(await element.getText());

  // Click the "Wait" button repeatedly - seems to take 7 clicks
  for (let i = 0; i < 6; i++) {
    let listItem = await this.driver.findElement(By.xpath('//ul/li[text()="Wait"]'));
    await listItem.click();
    await this.driver.sleep(500); // Wait 500ms after each click
  }

  // Check the value again
  let updatedValue = +(await element.getText());
  expect(updatedValue).to.be.below(initialValue);
});

When('the value of my {string} turns to {int}', async function (statusType, expectedValue) {
  let cssSelector = `.${statusType.toLowerCase()} .progress .val`;

  // Wait until health reaches the expected value
  await this.driver.wait(async () => {
    let element = await this.driver.findElement(By.css(cssSelector));
    let currentValue = +(await element.getText());
    return currentValue === expectedValue;
  }, 10000); // wait up to 10 seconds
});

Then('I should see an infomessage telling me I lost the game', async function () {
  let messageElement = await this.driver.findElement(By.css('.description'));
  let messageText = await messageElement.getText();
  expect(messageText).to.include("Your health has deteriorated too much");
});

Then('I should see a {string} button', async function (buttonType) {
  // Use buttonType to find the button
  let button = await this.driver.findElement(By.xpath(`//ul/li[text()="${buttonType}"]`));
  expect(await button.isDisplayed()).to.be.true;
});
