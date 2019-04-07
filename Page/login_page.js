var register_page = require('./register_page'); 

var login_page = function() {

   this.clickToRegister = function(){

       element(by.css('body > section > section > div > form > span > a')).click();
       return require('./register_page.js');
   };
   
   this.email = function(value){
       element(by.css('[ng-model="credentials.email"]')).sendKeys(value);
   };

   this.password = function(value){
       element(by.model('credentials.password')).sendKeys(value);
    };
    
   this.clickToLogin = function(){
        element(by.css('[type="submit"]')).click();
        return require('./task_page.js');   
   };
   
   this.login = function() {
       var index = 0;
       this.email('qa1@gmail.com');
       this.password('Aa123456!');
       this.clickToLogin();
   }
};
    
module.exports = new login_page;





