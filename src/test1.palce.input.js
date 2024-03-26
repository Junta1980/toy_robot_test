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



describe('Test Place', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
    });

    it('PLACE input', async function() {
        await driver.get(config.url);
        await driver.findElement(By.xpath('//input')).sendKeys('1,4,N');
        await driver.findElement(By.xpath('//button[text()="PLACE"]')).click();  
        await driver.findElement(By.xpath('//div[@class="rotate-0"]'));
        await new Promise(r => setTimeout(r, 5000));    
    });

    it('PLACE click', async function() {
   
        await driver.findElement(By.xpath('(//app-cell)[11]')).click();
        await new Promise(r => setTimeout(r, 3000));  
        await driver.findElement(By.xpath('(//div[@class="rotate-0"])'));
        await new Promise(r => setTimeout(r, 5000)); 

    });


    after(() => { driver.quit()});
})
