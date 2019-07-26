import {Builder, By, until} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

let o = new chrome.Options();
o.addArguments('disable-infobars');
o.addArguments('headless');
o.setUserPreferences({ credential_enable_service: false });

const Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByClassName = async function(name) {
        await this.driver.wait(until.elementLocated(By.className(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };
};

module.exports = Page;
