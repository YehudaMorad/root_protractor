var meetings_page = function() {
    
    this.clickOnMeetings = function() {
        element(by.css('[data-ui-sref="main.discussions.all"]')).click();
    };

    this.createNewItem = function() {
        element(by.model('newItem')).click();
    }
}

module.exports = new meetings_page;
