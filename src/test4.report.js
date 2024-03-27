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



describe('Test report button', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
    });

    it('report at position 0,3,N', async function() {
        await driver.get(config.url);
        await driver.findElement(By.xpath('(//app-cell)[2]')).click();
        await driver.findElement(By.xpath('//button[text()="REPORT"]')).click();        
        await new Promise(r => setTimeout(r, 2000)); 
        await driver.findElement(By.xpath('//*[contains(text(), "column : 0 row : 3 direction: N")]'));
        await new Promise(r => setTimeout(r, 5000));        
        
    });

    after(() => { driver.quit()});
})
