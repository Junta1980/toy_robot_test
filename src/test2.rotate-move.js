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



describe('Test ROTATE & MOVE', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
    });

    it('ROTATE LEFT', async function() {
        await driver.get(config.url);        
        await driver.findElement(By.xpath('(//app-cell)[1]')).click();
        await new Promise(r => setTimeout(r, 3000)); 
        await driver.findElement(By.xpath('//button[text()="LEFT"]')).click();
        await driver.findElement(By.xpath('//div[@class="rotate-3"]'));
        await new Promise(r => setTimeout(r, 3000));
    });

    it('ROTATE RIGHT', async function() {
        await driver.findElement(By.xpath('(//app-cell)[2]')).click();
        await new Promise(r => setTimeout(r, 3000)); 
        await driver.findElement(By.xpath('//button[text()="RIGHT"]')).click();
        await driver.findElement(By.xpath('//div[@class="rotate-1"]'));
        await new Promise(r => setTimeout(r, 3000)); 
    });

    it('MOVE', async function() { 
        await driver.findElement(By.xpath('(//app-cell)[6]')).click();
        await new Promise(r => setTimeout(r, 3000)); 
        await driver.findElement(By.xpath('//button[text()="LEFT"]')).click();
        await driver.findElement(By.xpath('//button[text()="MOVE"]')).click();
        await new Promise(r => setTimeout(r, 3000)); 
        await driver.findElement(By.xpath('//button[text()="MOVE"]')).click();
        await driver.findElement(By.xpath('//h3[text()="Alert"]'));
        await new Promise(r => setTimeout(r, 5000)); 
    });


    after(() => { driver.quit()});
})
