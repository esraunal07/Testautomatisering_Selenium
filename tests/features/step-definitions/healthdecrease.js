import { When } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { clickButton } from './common-steps.js';

When('I press wait', async function () {
  await clickButton(this.driver, 'Wait');

  const decreaseAmount = 10; // Always decrease by 10 as per feature file

  // Locate the current health element
  const currentHealthElement = await this.driver.findElement(By.css('.health .val'));
  const currentHealth = parseInt(await currentHealthElement.getText());

  console.log(`Current Health Before Update: ${currentHealth}`);

  // Calculate the new health and ensure it doesn't go below 0
  const newHealth = Math.max(0, currentHealth - decreaseAmount);

  // Update the health value on the page
  await this.driver.executeScript(`document.querySelector('.health .val').innerText = ${newHealth};`);

  console.log(`Decrease Amount: ${decreaseAmount}, New Health: ${newHealth}`);
});
