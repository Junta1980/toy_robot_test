const {Builder , until , By , logging , Capabilities } = require("selenium-webdriver");

let config = require('../config/config.json')
logger = logging.getLogger('webdriver')
logger.setLevel(logging.Level.OFF)

var capabilities = {
    'browserName' : 'chrome',
    'chromeOptions' : {
      'args' : ["--disable-plugins"]
    }
}



describe('Test Input error', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
    });

    it('Input bad coordinate format', async function() {
        await driver.get(config.url);        
        await driver.findElement(By.xpath('//input')).sendKeys('sdfkahfd,sjdfsdaf');
        await driver.findElement(By.xpath('//button[text()="PLACE"]')).click();  
        await new Promise(r => setTimeout(r, 2000)); 
        await driver.findElement(By.xpath('//*[contains(text(), "coordinate must be in format x,y,f")]'));
        await new Promise(r => setTimeout(r, 2000)); 
    });

    it('x bad format', async function() {
        await driver.findElement(By.xpath('//input')).clear();
        await driver.findElement(By.xpath('//input')).sendKeys('10,1,N');
        await driver.findElement(By.xpath('//button[text()="PLACE"]')).click();  
        await new Promise(r => setTimeout(r, 2000)); 
        await driver.findElement(By.xpath('//*[contains(text(), "coordinate not valid enter x between 0 and 4 Y between 0 and 4")]'));
        await new Promise(r => setTimeout(r, 5000)); 
    });

    it('y bad format', async function() {
        await driver.findElement(By.xpath('//input')).clear();
        await driver.findElement(By.xpath('//input')).sendKeys('1,10,N');
        await driver.findElement(By.xpath('//button[text()="PLACE"]')).click();  
        await new Promise(r => setTimeout(r, 2000)); 
        await driver.findElement(By.xpath('//*[contains(text(), "coordinate not valid enter x between 0 and 4 Y between 0 and 4")]'));
        await new Promise(r => setTimeout(r, 5000)); 
    });


    after(() => { driver.quit()});
})
