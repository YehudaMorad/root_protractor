var actions = function() {

    this.openNewTab = function() {
        browser.actions().sendKeys(protractor.Key.CONTROL +'t').perform(); 
        console.log("workkk!!!!!!!!!!")        
    }
    this.switchPage = function() {
        browser.getAllWindowHandles().then(function(index) {
            browser.switchTo().window(index)
            console.log("!!!!!!!!!")        
        })

     }

}

module.exports = new actions;
