var ipAddress = 'http://52.169.148.56:3000/';

describe('Test Login and Register page > ', function(){
    
    
    // Open the browser and navigate to register page
    it('Click on register button', function() {
        
        var login_page = require('./Page/login_page');
        
        browser.get(ipAddress);
        browser.manage().window().maximize();
        login_page.clickToRegister();
        expect(browser.getCurrentUrl()).toContain("register");
    }),
    
    
    // Fill the filed om register page
    it('Create four new users', function() {
        
        var register_page = require('./Page/register_page.js');     
        register_page.createUser(0);
        expect(browser.getCurrentUrl()).toContain('task');
    }),
    
    // Login after register
    it(' logout', function(){
        
        var task_page = require('./Page/task_page.js');
        
        task_page.logOut();
        expect(browser.getCurrentUrl()).toContain('login');
    });    
    
    it('login', function(){
       
        var login_page = require('./Page/login_page.js');

        login_page.login();
        expect(browser.getCurrentUrl()).toContain('tasks');
    });
});

xdescribe('Meetings >', function() {
    
    var meetings_page = require('./Page/meetings_page.js');
    
    it('press on meetings tab', function(){
       
        browser.get(ipAddress+'tasks/my/activities')
        meetings_page.clickOnMeetings();
        expect(browser.getCurrentUrl()).toContain('discussions')            
    });

    it('Create new item', function() {
        
        meetings_page.createNewItem();
        meetings_page.createNewItem();
        var items = $$('.ng-isolate-scope').$('.n')
        
    
    });

}); 