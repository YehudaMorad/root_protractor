var condition = function() {
    
    var task_page = require('./Page/task_page.js');
    var EC = protractor.ExpectedConditions;

    this.beClickable = function(locator) {
        browser.wait(EC.elementToBeClickable($(locator)), 5000);
    };
    

    this.whatsNewIsPresent = function(locator) {
       var isPresent = element(by.buttonText("Don't show me again"));
       isPresent.isPresent().then(function(result) {
           if (result) {
                task_page.whatsNew()
           }
       }
    )};
   
};

module.exports = new condition;