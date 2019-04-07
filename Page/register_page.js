var login_page = require('./login_page.js');
var task_page = require('./task_page.js');
var condition = require('../condition.js');
var users = ['Tokyo', 'Berlin', 'Denver', 'Moscow'];
var emails = ['qa1@gmail.com', 'qa2@gmail.com', 'qa3@gmail.com', 'qa4@gmail.com'];
var index = 0;

var register_page = function() {

    this.name = function(value){
        element(by.model('credentials.name')).sendKeys(value);
    }
    this.email = function(value){
        element(by.model('credentials.email')).sendKeys(value);
    }
    this.userName = function(value){
        element(by.model('credentials.username')).sendKeys(value);
    }
    this.password = function(value){
        element(by.model('credentials.password')).sendKeys(value);
    }    
    this.confirmPassword = function(value){
        element(by.model('credentials.confirmPassword')).sendKeys(value);
    }
    this.clickAfterRegister = function(){
        element(by.buttonText('Register')).click();
        return require('./task_page.js')
    }
    this.loginFromRegisterPage = function() {
        element(by.css('[ui-sref="login"]')).click()
        return require('./login_page');
    }
    
    this.createUser = function(index) {
       

            this.name(users[index]);
            this.email(emails[index]);
            this.userName(users[index]);
            this.password('Aa123456!');
            this.confirmPassword('Aa123456!');
            this.clickAfterRegister();
            expect(browser.getCurrentUrl()).toContain("task");
            browser.sleep(1000);
            condition.whatsNewIsPresent();
    }
};

module.exports = new register_page;
