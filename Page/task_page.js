var task_page = function(){
   
    this.logOut = function() {

        var condition = require('../condition.js')
        
        element(by.css('body > section > section > div > div.panes-wrapper.ng-scope > div.detailspane.animate-hide.ng-isolate-scope > div.ng-isolate-scope > header > div.user-menu.dropdown > div > div')).click();
        condition.beClickable('[ng-click="logout()"]');
        element(by.css('[ng-click="logout()"]')).click();
        return require('./login_page.js');
    };
       
    this.whatsNew = function() {

        var whatsNew = element(by.buttonText("Don't show me again"));
        whatsNew.click();
           
    };
   

}

module.exports = new task_page;