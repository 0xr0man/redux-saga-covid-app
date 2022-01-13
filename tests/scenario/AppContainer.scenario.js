module.exports = {
    tags: ['appContainerPage'],
    'App container page': function (browser) {
        browser.url(browser.launch_url)

        //element expectations
        browser.expect.element('.tabs-navigation-container').to.be.visible
        browser.expect.element('.tabs-navigation-item-results').to.be.visible
        browser.expect.element('.tabs-navigation-item-charts').to.be.visible
        browser.expect.element('.tabs-navigation-item-results').text.to.contain('RESULTS')
        browser.expect.element('.tabs-navigation-item-charts').text.to.contain('CHARTS')
        browser.expect.element('.tabs-navigation-item-results.Mui-selected').to.be.visible

        //charts area
        browser.click('.tabs-navigation-item-charts')
        browser.expect.element('.tabs-navigation-item-charts.Mui-selected').to.be.visible
        browser.expect.element('.continent-radios-legend').to.be.visible
        browser.expect.element('.continent-radios-container').to.be.visible
        browser.expect.element('.continent-radios-group').to.be.visible
        browser.click('.continentRadioEurope')
        browser.expect.element('.continentRadioEurope.Mui-checked').to.be.visible
        browser.click('.continentRadioAsia')
        browser.expect.element('.continentRadioAsia.Mui-checked').to.be.visible

        browser.end()
    }
}